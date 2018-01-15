// ===============================================
// Contains common methods for all default styling
// ===============================================

import {css} from 'styled-components';

export const Container = {
    getDefaultStyle: (theme, vertical) => {
        const direction = vertical ? 'column' : 'row';
        return css`
            display: flex;
            margin-bottom: ${theme.layout.common.$spacingMedium};
            padding: 0px;
            flex-direction: ${direction}
        `;
    }
};

export const Option = {
    getDefaultStyle: (theme) => css`
        display: inline-block;
        flex-grow: 1;
        text-align: center;
        border-width: ${theme.layout.border.size};
        border-style: ${theme.layout.border.style};
        border-top: none;
        padding: ${theme.layout.common.$spacingMedium};
        cursor: pointer;
        
        &:first-child {
            border-top-width: ${theme.layout.border.size};
            border-top-style: ${theme.layout.border.style};
            
            border-top-left-radius: ${theme.layout.border.radius};
            border-top-right-radius: ${theme.layout.border.radius};
        }
        
        &:last-child {
            border-bottom-left-radius: ${theme.layout.border.radius};
            border-bottom-right-radius: ${theme.layout.border.radius};
        }
    `
};
