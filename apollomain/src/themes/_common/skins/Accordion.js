import {css} from 'styled-components';

export const Container = {
    getDefaultStyle: (theme) => css`
        box-sizing: border-box;
        margin-bottom: ${theme.layout.common.$spacingMedium};
    `
};

export const Section = {
    getDefaultStyle: (theme) => css`
        border-bottom: solid 1px ${theme.color.$main9};
        &:first-child {
            border-top: solid 1px ${theme.color.$main9};
        }
       
        > .sectionHead {
            position: relative;
            height: 64px;
            line-height: 64px;
            padding-left: ${theme.layout.common.$spacingWider};
            padding-right: ${theme.layout.common.$spacingWider};
            background-color: ${theme.color.$main10};
            font-face: ${theme.layout.$fontFaceText};
            font-size: ${theme.layout.common.$fontSizeHeadline4};
            font-weight: bold;
            margin: 0;
            
            > a.plus, > a.minus {
                top: 26px;
                right: 60px;
            }
        }
        
        > .sectionBody {
            height: 0;
            max-height: 0;
            padding-left: ${theme.layout.common.$spacingWider};
            padding-right: ${theme.layout.common.$spacingWider};
            overflow-y: hidden;
            transition-property: max-height, padding-top, padding-bottom;
            transition-duration: .5s, .5s, .5s;
        }
        
        &.selected > .sectionBody {
            height: auto;
            margin: ${theme.layout.common.$spacingMedium} 0; 
            max-height: 520px;
        }
        
        &.selected > .sectionHead {
            background-color: ${theme.color.$main11};
        }
    `
};