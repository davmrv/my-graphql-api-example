import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

const authorAdd = new GraphQLInputObjectType({
  name: 'authorAdd',
  description: 'Add an author',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

export default authorAdd;
