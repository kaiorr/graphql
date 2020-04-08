const { GraphQLString, GraphQLList, GraphqlObjectInputType } = require("graphql")
const CommentType = require("./CommentType")

module.exports = queries = {
  getComments: {
    type: GraphQLList(CommentType),
    resolve: getComments
  }
}

module.exports = mutations = {
  saveComment: {
    type: CommentType,
    resolve: saveComment,
    args: {
      type: new GraphqlObjectInputType({
        name: 'CommentInput',
        type: {
          name: {
            type: GraphQLString
          },
          content: {
            type: GraphQLString
          }
        }
      })
    }
  }
}