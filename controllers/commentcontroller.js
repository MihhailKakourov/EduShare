const Comment = require('../models/comment');
const User = require("../models/user")

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    user_id: req.userId,
    material_id: req.body.materialId,
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
    await Comment.update({ comment: content }, { where: { id: commentId } });
  
    res.status(200).send({ message: "Comment updated" });
  };