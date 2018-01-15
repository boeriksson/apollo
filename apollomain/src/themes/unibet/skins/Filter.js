import {css} from 'styled-components';
import * as Filter from '../../_common/skins/Filter';

/* eslint-disable quotes */
export const Container = ({ theme }) => {
    return css`${Filter.Container.getDefaultStyle(theme)}`;
};
/* eslint-enable quotes */
