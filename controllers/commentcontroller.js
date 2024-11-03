const Comment = require('../models/comment');
const User = require("../models/user")

exports.addComment = async (req, res) => {
  const materialId = req.headers['materialid'];
  
  const comment = await Comment.create({
    user_id: req.userId,
    material_id: materialId,
    content: req.body.content,
});
    res.status(201).send(comment);
};

exports.modifyComment = async (req, res) => {
  const commentId = req.params.commentId;
  const { content } = req.body;
  const comment = await Comment.findOne({
      where: { id: commentId, user_id: req.userId },
  });
  if (!comment) {
      return res.status(404).send({ message: "Comment not found" });
  }
  await Comment.update({ content: content }, { where: { id: commentId } });

  res.status(200).send({ message: "Comment updated" });
};


exports.deleteComment = async (req, res) => {
  const commentId = req.params.commentId;
  const comment = await Comment.findOne({
    where: { id: commentId, user_id: req.userId },
  });
  if (!comment) {
    return res.status(404).send({ message: "Comment not found" });
  }
  await Comment.destroy({ where: { id: commentId } });

  res.status(200).send({ message: "Comment deleted" });
};

exports.getCommentsByMaterial = async (req, res) => {
  const materialId = req.params.materialId;

  try {
    const comments = await Comment.findAll({
      where: { material_id: materialId },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    if (!comments.length) {
      return res.status(404).send({ message: "No comments found for this material" });
    }

    res.status(200).send(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error occurred while retrieving comments" });
  }
};