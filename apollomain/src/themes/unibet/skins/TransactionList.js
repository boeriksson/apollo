import {css} from 'styled-components';
import * as TransactionList from '../../_common/skins/TransactionList';

/* eslint-disable quotes */
export const Container = ({ theme }) => {
    return css`${TransactionList.Container.getDefaultStyle(theme)}`;
};
/* eslint-enable quotes */
