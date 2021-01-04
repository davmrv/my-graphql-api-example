import { GraphQLID, GraphQLList } from 'graphql'
import PostType from '../types/PostType'
import PostResolver from '../resolvers/PostResolver'
import Post from '../models/Post'

export default {
  posts: {
    type: GraphQLList(PostType),
    resolve() {
      return Post.findAll({})
    },
  },
  post: {
    type: PostType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve(_, { id }) {
      return Post.findOne({ where: { id } })
    },
  },
}
