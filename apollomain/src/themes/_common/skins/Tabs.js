import {css} from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

export const Container = {
    getDefaultStyle: (theme) => css`
        float: left;
        clear: both;
        width: 100%;
        display: inline-block;
        margin: 24px 0;
        
        > ul {
            background-color: #e8e8e8;
            font-size: 0;
            width: 100%;
            padding: 0;
            margin: 0;
            
            > li {
                display: inline-block;
                text-align: center;
                border: 0;
                margin: 0;
                
                > a {
                    display: inline-block;
                    text-transform: uppercase;
                    text-decoration: none;
                    font-size: 14px;
                    line-height: 66px;
                    height: 64px;
                    padding: 0 24px;
                    font-weight: 500;
                    margin: 0;
                    color: #777;
                    
                    > div.arrowDown {
                        display: none;
                    }
                }
                
                > a:hover {
                    background-color: #d8d8d8;
                }
                
            }
            
            li.selected > a {
                background: #0e5f31;
                color: #FFFFFF;
            }
        }
        > ul.dropdown {
            display: none;
        }
        ${mediaQuery(theme, 'tabsCollapse', `
            > ul:not( .dropdown ) {
                > li {
                    display: none;
                }
                > li.selected {
                    display: block;
                    text-align: left;
                    width: 100%;
                    > a {
                        width: 100%;
                        box-sizing: border-box;
                        
                        > div.arrowDown {
                            display: inline-block;
                            float: right;
                            color: #FFFFFF;
                        }
                    }
                }
            }
            > ul.dropdown {
                display: block;
                > li {
                    z-index: 9999;
                    display: block;
                    text-align: left;
                    > a {
                        width: 100%;
                        box-sizing: border-box;
                    }
                } 
                li.selected {
                    display: none;
                }
            }
        `)}
    `
};
