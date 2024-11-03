const Comment = require('../models/comment');
const User = require("../models/user")

exports.addComment = async (req, res) => {
  try {
    const materialId = req.headers['materialid'];
    
    const comment = await Comment.create({
      user_id: req.userId,
      material_id: materialId,
      content: req.body.content,
    });
    
    res.status(201).send(comment);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.modifyComment = async (req, res) => {
  const commentId = req.params.commentId;
  const { content } = req.body;

  try {
    const comment = await Comment.findOne({
      where: { id: commentId},
    });

    if (comment.user_id !== req.userId) {
      return res.status(403).send({ message: "You are not authorized to modify this material" });
    }

    if (!comment) {
      return res.status(404).send({ message: "Comment not found" });
    }

    await Comment.update({ content: content }, { where: { id: commentId } });
    res.status(200).send({ message: "Comment updated" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  const commentId = req.params.commentId;

  try {
    const comment = await Comment.findOne({
      where: { id: commentId, user_id: req.userId },
    });

    if (!comment) {
      return res.status(404).send({ message: "Comment not found" });
    }

    await Comment.destroy({ where: { id: commentId } });
    res.status(200).send({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
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