const Material = require("../models/material");
const User = require("../models/user");

exports.addMaterial = async (req, res) => {
  const material = await Material.create({
    name: req.body.name,
    content: req.body.content,
    description: req.body.description,
    user_id: req.userId,
  });
  res.status(201).send(material);
};

exports.modifyMaterial = async (req, res) => {
  const materialId = req.params.materialId;
  const { name, content, description } = req.body;
  const material = await Material.findOne({ where: { id: materialId } });

  if (material.user_id !== req.userId) {
    return res
      .status(403)
      .send({ message: "You are not authorized to modify this material" });
  }

  await Material.update(
    {
      description: description,
      content: content,
      name: name,
    },
    {
      where: { id: materialId },
    }
  );

  res.status(200).send({ message: "Material updated successfully" });
};
