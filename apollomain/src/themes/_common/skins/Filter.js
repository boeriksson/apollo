import {css} from 'styled-components';

export const Container = {
    getDefaultStyle: (theme) => css`        
        & > div.header {
            position: relative;
            margin-top: ${theme.layout.common.$spacingWide};
            margin-bottom: ${theme.layout.common.$spacingMedium};
            > div.centered {
                text-align: center;
                span {
                    font-weight: bold;
                    font-size:  ${theme.layout.common.$fontSizeHeadline1};
                }
            }
            > a.close {
                right: 30px;
                top: -10px;
            }
        }
        
        & > .filterFooter {
            > span {
                margin-left: ${theme.layout.common.$spacingWider};
                font-size: ${theme.layout.common.$fontSizeSmaller};
            }
            button {
                float: right; 
                margin-right: ${theme.layout.common.$spacingWider};
            }
        }
    `
};