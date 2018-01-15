import {css} from 'styled-components';
import * as radioBar from '../../_common/skins/RadioBarX';

/* eslint-disable quotes */
export const Container = ({ theme, vertical }) => {
    console.log('Unibet - vertical: ', vertical);
    return css`${radioBar.Container.getDefaultStyle(theme, vertical)}`;
};

export const Option = ({theme, selected}) => css`
    ${radioBar.Option.getDefaultStyle(theme)}
    
    ${theme.typography.getFont({
        category: 'header',
        type: 'h4',
        weight: 'normal'
    })}
    
    border-color: ${theme.color.$brand3};
    
    ${selected ? `
        background-color: ${theme.color.$brand3};
        color: ${theme.color.$main11};
    ` : ``}
`;
/* eslint-enable quotes */
