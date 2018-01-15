import {css} from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

export const Container = {
    getDefaultStyle: (theme) => css`
        div.table {
            display: table;
            width: 100%;
        }
        
        div.headerRowMobile, div.headerRowDesktop {
            font-weight: 600;
            width: 100%;
            display: table-header-group;
            
            > .headerCell {
                display: table-cell;
                padding: 2px;
            }
            > .headerCell:last-child {
                text-align: right;
            }
        }
        
        div.desktop-row {
            display: table-row;
            background-color: ${theme.color.$main9};
            font-size: ${theme.layout.common.$fontSizeSmaller};
            line-height: normal;
            padding: 2px;
            
            div.cell {
                display: table-cell;
                position: relative;
                padding: 4px;
                border-bottom: 3px solid white;
            }
            div.cell:last-child {
                text-align: right;
            }
            span {
                font-weight: 600;
            }
        }
        
        div.headerRowMobile {
            display: none;
        }
        div.mobile-row {
            display: none;
        }
        
        ${mediaQuery(theme, 'tabsCollapse', `
            div.headerRowMobile {
                display: table-header-group;
            }
            div.headerRowDesktop {
                display: none;
            }
            
            div.mobile-row {
                display: table-row;
                background-color: ${theme.color.$main9};
                font-size: ${theme.layout.common.$fontSizeSmaller};
                line-height: normal;
                padding: 2px;
                
                div.cell {
                    display: table-cell;
                    position: relative;
                    padding: 2px;
                    border-bottom: 3px solid white;
                                   
                    .cell-top {
                        display: block;
                        padding: 2px;
                        
                    }
                    div.cell-top:first-child {
                        font-weight: 600;
                    }
                }
                > div.cell:last-child {
                    text-align: right;
                    font-weight: 600;
                }
            }
            
            div.desktop-row {
                display: none;
            }
        `)}
    `
};
