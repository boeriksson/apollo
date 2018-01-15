import {css} from 'styled-components';
import * as RadioBar from '../../_common/skins/RadioBarX';

/* eslint-disable quotes */
export const Container = ({ theme, vertical }) => css`
    ${RadioBar.Container.getDefaultStyle(theme, vertical)}
    
`;

export const Option = ({theme, selected}) => css`
    ${RadioBar.Option.getDefaultStyle(theme)}
    
    ${theme.typography.getFont({
        category: 'header',
        type: 'h5'
    })}
    
    border-color: ${theme.color.$brand1};
    
    ${selected ? `
        background-color: ${theme.color.$brand1};
        color: ${theme.color.$main11};
    ` : ``}
`;
/* eslint-enable quotes */
