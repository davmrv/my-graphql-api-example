import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

const authorAdd = new GraphQLInputObjectType({
  name: 'authorAdd',
  description: 'Author Add',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

export default authorAdd;
