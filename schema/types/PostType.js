import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import AuthorResolver from '../resolvers/AuthorResolver';
import AuthorType from './AuthorType';

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve(post) {
        return AuthorResolver.single(post.author_id);
      }
    },
  }),
});

export default PostType;
