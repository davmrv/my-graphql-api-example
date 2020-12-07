import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import AuthorMutations from './mutations/AuthorMutations';

import AuthorQueries from './queries/AuthorQueries';
import PostQueries from './queries/PostQueries';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'rootQueries',
    fields: {
      ...AuthorQueries,
      ...PostQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'rootMutations',
    fields: () => ({
      author: {
        type: AuthorMutations,
        resolve: () => ({}),
      },
    }),
  }),
});

export default Schema;
