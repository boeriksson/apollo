import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, Observable } from "apollo-link-core";
import { print } from "graphql/language/printer";
import { graphql } from 'graphql'

import schema from './schema'

const logger = (operation, forward) => {
    const { operationName, query, variables, context } = operation;
  
    // create group
    console.group(operationName);
    // log operation
    console.log({ operationName, variables, context, query: print(query) });
  
    // make request
    return forward(operation).map(({ data, errors }) => {
      // log result
      console.log({ data, errors });
      console.groupEnd();
      return { data, errors };
    });
  };

  // simple local interface to query graphql directly
  const localLink = operation =>
  new Observable(observer => {
    const { query, variables, operationName } = operation;
    graphql(schema, print(query), {}, {}, variables, operationName)
      .then(result => {
        observer.next(result);
        observer.complete(result);
      })
      .catch(e => observer.error(e));
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([logger, localLink]),
  });

export default client;
