import { GraphQLID, GraphQLList } from 'graphql'
import AuthorResolver from '../resolvers/AuthorResolver'
import AuthorType from '../types/AuthorType'
import Author from '../models/Author'

export default {
  authors: {
    type: GraphQLList(AuthorType),
    resolve() {
      return Author.findAll({})
    },
  },
  author: {
    type: AuthorType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve(_, { id }) {
      return Author.findOne({ where: { id } })
    },
  },
}
