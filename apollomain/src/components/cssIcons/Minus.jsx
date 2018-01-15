import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMinus = styled.a`
    position: absolute;
    opacity: 0.3;
    
    &:hover {
        opacity: 1;
    }
    
    &:before, &:after {
        position: absolute;
        left: 14px;
        content: ' ';
        height: 14px;
        width: 3px;
        background-color: #333;
        transform: rotate(90deg);
    }
`;

const Minus = ({ callback }) => <StyledMinus className="minus" href="#" onClick={ callback }></StyledMinus>;

Minus.propTypes = {
    callback: PropTypes.func
};

export default Minus;