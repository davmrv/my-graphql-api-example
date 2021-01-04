import { GraphQLObjectType } from 'graphql';
import PostType from '../types/PostType'
import Post from '../models/Post'
import postAdd from '../inputTypes/post/postAdd'

export default new GraphQLObjectType({
  name: 'PostMutations',
  fields: () => ({
    add: {
      type: PostType,
      args: {
        input: {
          type: postAdd,
        },
      },
      resolve: async (_, { input }) => {
        return await Post.create({
          title: input.title,
          body: input.body,
        });
      },
    },
  }),
})
