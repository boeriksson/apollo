import React from 'react';
import BaseContainer from './BaseContainer.jsx';
import { ThemeProvider, injectGlobal } from 'styled-components';
import merge from 'lodash/merge';
import baseTheme from '@kindred-payment/pay-provider-ui-common/lib/BASE_THEME';
import innerTheme from './themes/INNER_THEME/index';
import 'react-dates/initialize';

const theme = merge(innerTheme, baseTheme);
const TransactionHistory = () => {
    injectGlobal`${theme.skins.Global(theme, process.env.NODE_ENV)}`; // eslint-disable-line no-unused-expressions
    return (
        <ThemeProvider theme={theme}>
            <BaseContainer />
        </ThemeProvider>
    );
};

export default TransactionHistory;
