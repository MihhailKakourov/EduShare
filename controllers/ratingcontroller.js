const Rating = require("../models/rating");

exports.addRate = async (req, res) => {
  const rating = await Rating.create({
    user_id: req.userId,
    material_id: req.body.materialId,
    rating: req.body.rate,
  });
  res.status(201).send(rating);
};

exports.modifyRate = async (req, res) => {
  const ratingId = req.params.ratingId;
  const { rate } = req.body;
  const rating = await Rating.findOne({
    where: { id: ratingId, user_id: req.user_id },
  });
  if (!rating) {
    return res.status(404).send({ message: "Rating not found" });
  }
  await Rating.update({ rating: rate }, { where: { id: ratingId } });

  res.status(200).send({ message: "Rating updated" });
};
