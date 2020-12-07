import { GraphQLID, GraphQLList } from 'graphql';
import PostType from '../types/PostType'
import PostResolver from '../resolvers/PostResolver';

export default {
  posts: {
    type: GraphQLList(PostType),
    resolve() {
      return PostResolver.all;
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
      return PostResolver.single(parseInt(id));
    }
  }
};