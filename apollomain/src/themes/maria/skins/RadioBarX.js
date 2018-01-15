import {css} from 'styled-components';
import * as radioBar from '../../_common/skins/RadioBarX';

/* eslint-disable quotes */
export const Container = ({ theme, vertical }) => css`
    ${radioBar.Container.getDefaultStyle(theme, vertical)}
`;

export const Option = ({theme, selected}) => css`
    ${radioBar.Option.getDefaultStyle(theme)}
    ${theme.typography.getFont({
        category: 'input',
        type: 'radiobar'
    })}
    background-color: ${theme.color.$mediumGrey};
    color: ${theme.color.$radioPurple};
    border: none;
    border-radius: 0 !important;
    padding: 0 20px;
    margin-right: 10px;
    
    &:last-child {
        margin-right: 0;
    }
    
    ${selected && `color: ${theme.color.$green};`}
`;
