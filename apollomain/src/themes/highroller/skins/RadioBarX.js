import {css} from 'styled-components';
import * as radioBar from '../../_common/skins/RadioBarX';

/* eslint-disable quotes */
export const Container = ({ theme, vertical }) => css`
    ${radioBar.Container.getDefaultStyle(theme, vertical)}
    
`;

export const Option = ({theme, selected}) => css`
    ${radioBar.Option.getDefaultStyle(theme)}
    
    ${theme.typography.getFont({
        category: 'header',
        type: 'h4',
        weight: 'normal'
    })}
    
    border-color: ${theme.color.$brand1};
    
    ${selected ? `
        background-color: ${theme.color.$brand1};
        color: ${theme.color.$main7};
    ` : ``}
`;
/* eslint-enable quotes */
