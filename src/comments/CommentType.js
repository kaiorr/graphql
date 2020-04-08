const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql")
const {} = require("graphql-iso-date")

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    }
  }
})