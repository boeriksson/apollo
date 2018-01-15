import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client'

import TransactionHistory from '@transaction-history/apollomain';

const ReactWrapper = () => (
    <ApolloProvider client={client}>
        <TransactionHistory/>
    </ApolloProvider>
);

export default ReactWrapper;
