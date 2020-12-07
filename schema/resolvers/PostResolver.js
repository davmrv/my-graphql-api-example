import AuthorResolver from './AuthorResolver';

class PostResolver {
  constructor(data) {
    Object.assign(this, data);
  }

  static get all() {
    return POSTS.values();
  }

  static single(id) {
    return POSTS.get(id);
  }

  get author() {
    return AuthorResolver.single(this.author_id);
  }
}

export const POSTS = new Map();

POSTS.set(1, new PostResolver({
  id: 1,
  title: 'This is the first post',
  body: 'This is the first post',
  author_id: 1,
}));

POSTS.set(2, new PostResolver({
  id: 2,
  title: 'This is the second post',
  body: 'This is the second post',
  author_id: 2,
}));

export default PostResolver;
