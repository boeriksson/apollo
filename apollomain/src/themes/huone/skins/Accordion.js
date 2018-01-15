import {css} from 'styled-components';
import * as Accordion from '../../_common/skins/Accordion';

/* eslint-disable quotes */
export const Container = ({ theme }) => {
    return css`${Accordion.Container.getDefaultStyle(theme)}`;
};

export const Section = ({ theme }) => css`
    ${Accordion.Section.getDefaultStyle(theme)}
`;
/* eslint-enable quotes */
