import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '@transaction-history/apollomain/schema';

const endpoint = 'http://localhost:8080';
const toJSON = res => res.json();

const deposit = (root, {id}) => fetch(`${endpoint}/deposits/${id}`).then(toJSON);
const deposits = () => fetch(`${endpoint}/deposits`).then(toJSON);
const withdrawals = () => fetch(`${endpoint}/withdrawals`).then(toJSON);

const resolvers = {
  Query: {
      deposits,
      withdrawals
  },
  WithdrawalState: {
      __resolveType(obj /* ,context, info */) {
          switch (obj.type) {
              case 'REQUESTED': return 'Requested';
              case 'PROCESSING': return 'Processing';
              case 'HOLD': return 'Hold';
              case 'REVERSED': return 'Reversed';
              case 'LEFT': return 'Left';
              default: return null;
          }
      }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
