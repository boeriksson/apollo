import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPlus = styled.a`
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
    }
    
    &:before {
        transform: rotate(90deg);
    }
`;

const Plus = ({ callback }) => <StyledPlus className="plus" href="#" onClick={ callback }></StyledPlus>;

Plus.propTypes = {
    callback: PropTypes.func
};

export default Plus;