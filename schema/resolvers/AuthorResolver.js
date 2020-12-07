import PostResolver from './PostResolver';

export const AUTHORS = new Map();

class AuthorResolver {
  constructor(data) {
    Object.assign(this, data);
  }

  static get all() {
    return AUTHORS.values();
  }

  static single(id) {
    return AUTHORS.get(id);
  }

  get posts() {
    return [...PostResolver.all].filter(({ author_id }) => author_id === this.id);
  }

  static add({ input }) {
    const id = AUTHORS.size + 1;

    AUTHORS.set(id, new AuthorResolver({
      id,
      name: input.name,
    }));

    return AUTHORS.get(id);
  }
}

AUTHORS.set(1, new AuthorResolver({
  id: 1,
  name: 'John Doe',
}));

AUTHORS.set(2, new AuthorResolver({
  id: 2,
  name: 'Jane Doe',
}));

export default AuthorResolver;
