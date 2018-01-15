import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledClose = styled.a`
    position: absolute;
    opacity: 0.3;
    
    &:hover {
        opacity: 1;
    }
    
    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 15px;
        width: 3px;
        background-color: #333;
    }
    
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

const Close = ({ callback }) => <StyledClose className="close" href="#" onClick={ callback }></StyledClose>;

Close.propTypes = {
    callback: PropTypes.func.isRequired
};

export default Close;