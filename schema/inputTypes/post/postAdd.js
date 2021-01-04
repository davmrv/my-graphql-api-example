import {
  GraphQLInputObjectType, GraphQLString,
} from 'graphql'

const postAdd = new GraphQLInputObjectType({
  name: 'postAdd',
  description: 'Add a post',
  fields: () => ({
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
  }),
});

export default postAdd;
