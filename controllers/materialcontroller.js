const Material = require("../models/material");
const { Op } = require("sequelize");
const User = require("../models/user");
const Type = require("../models/type")
const Category = require("../models/category")

exports.addMaterial = async (req, res) => {
  try {
    const material = await Material.create({
      name: req.body.name,
      content: req.body.content,
      description: req.body.description,
      user_id: req.userId,
      category_id: req.body.category_id,
    });

    if (req.body.typeIds && req.body.typeIds.length > 0) {
      const types = await Type.findAll({
        where: { id: req.body.typeIds },
      });
      await material.setTypes(types);
    }

    const formattedMaterial = await Material.findByPk(material.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Type,
          as: "types",
          attributes: ["name"],
        },
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
      ]
    });

    res.status(201).send(formattedMaterial);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.modifyMaterial = async (req, res) => {
  const materialId = req.params.materialId;

  try {
    const material = await Material.findOne({ where: { id: materialId } });

    if (!material) {
      return res.status(404).send({ message: "Material not found." });
    }

    if (material.user_id !== req.userId) {
      return res.status(403).send({ message: "You are not authorized to modify this material" });
    }

    if (req.body.name) {
      material.name = req.body.name;
    }

    if (req.body.content) {
      material.content = req.body.content;
    }

    if (req.body.description) {
      material.description = req.body.description;
    }

    if (req.body.category_id) {
      material.category_id = req.body.category_id;
    }

    await material.save();

    if (req.body.typeIds && req.body.typeIds.length > 0) {
      const types = await Type.findAll({
        where: { id: req.body.typeIds },
      });
      await material.setTypes(types);
    } else {
      await material.setTypes([]);
    }

    res.status(200).send(material);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  const materialId = req.params.materialId;

  try {
    const material = await Material.findOne({ where: { id: materialId } });

    if (!material) {
      return res.status(404).send({ message: "Material not found." });
    }

    if (material.user_id !== req.userId) {
      return res.status(403).send({ message: "You are not authorized to modify this material" });
    }

    await Material.destroy({ where: { id: materialId } });
    res.status(200).send({ message: "Material deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.searchMaterialsByTitle = async (req, res) => {
  const searchQuery = req.query.name;

  if (!searchQuery) {
    return res.status(400).send({ message: "Title query parameter is required" });
  }

  try {
    const materials = await Material.findAll({
      where: {
        name: {
          [Op.like]: `%${searchQuery}%`,
        },
      },
    });

    res.status(200).send(materials);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.showAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
        {
          model: Type,
          as: "types",
          attributes: ["id", "name"],
        },
      ],
    });

    res.status(200).send(materials);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
