const Comment = require("./CommentModel")

export async function saveComment(_, { input }) {
  const comment = await Comment.create(input)
}

export async function getComments(_, { input }) {
  const comments = await Comment.find()
  return comments
}