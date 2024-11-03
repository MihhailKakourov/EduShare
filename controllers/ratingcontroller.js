const Rating = require("../models/rating");

exports.addRate = async (req, res) => {
  try {
    const rating = await Rating.create({
      user_id: req.userId,
      material_id: req.body.materialId,
      rating: req.body.rate,
    });
    res.status(201).send(rating);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.modifyRate = async (req, res) => {
  const ratingId = req.params.ratingId;
  const { rate } = req.body;

  try {
    const rating = await Rating.findOne({
      where: { id: ratingId },
    });

    if (!rating) {
      return res.status(404).send({ message: "Rate not found" });
    }

    if (rating.user_id !== req.userId) {
      return res.status(403).send({ message: "You are not authorized to modify this material" });
    }

    await Rating.update({ rating: rate }, { where: { id: ratingId } });
    res.status(200).send({ message: "Rate updated" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteRate = async (req, res) => {
  const ratingId = req.params.ratingId;

  try {
    const rating = await Rating.findOne({
      where: { id: ratingId },
    });

    if (!rating) {
      return res.status(404).send({ message: "Rate not found" });
    }

    if (rating.user_id !== req.userId) {
      return res.status(403).send({ message: "You are not authorized to modify this material" });
    }

    await Rating.destroy({ where: { id: ratingId } });
    res.status(200).send({ message: "Rate deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

