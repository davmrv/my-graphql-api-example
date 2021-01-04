import { GraphQLObjectType } from 'graphql';
import authorAdd from '../inputTypes/author/authorAdd';
import AuthorType from '../types/AuthorType';
import Author from '../models/Author';

export default new GraphQLObjectType({
  name: 'AuthorMutations',
  fields: () => ({
    add: {
      type: AuthorType,
      args: {
        input: {
          type: authorAdd,
        },
      },
      resolve: async (_, { input }) => {
        return await Author.create({
          name: input.name,
        });
      },
    },
  }),
});
