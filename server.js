import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import Schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

const server = app.listen(3000, () => {
  let { address, port } = server.address();
  console.log(`GraphQL server running at ${address}:${port}`);
});