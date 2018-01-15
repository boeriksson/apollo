import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const radioGroupStyles = (props) => props.theme.skins.RadioBarX.Container(props);
const radioOptionStyles = (props) => props.theme.skins.RadioBarX.Option(props);

const StyledRadioGroup = styled.ul`${radioGroupStyles}`;
const StyledRadioOption = styled.li`${radioOptionStyles}`;

const RadioBar = ({options, selected, onSelectionChange, testName}) => {
    console.log('options: %o, selected: %s', options, selected);
    const opts = options.map((option) =>
        <StyledRadioOption selected={option.key === selected} key={option.key} id={option.key}
                           onClick={() => {
                               onSelectionChange(option.key);
                           }}>
            {option.name}
        </StyledRadioOption>
    );

    return (
        <StyledRadioGroup data-test-name={testName} vertical={true}>{opts}</StyledRadioGroup>
    );
};

RadioBar.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string
    })),
    selected: PropTypes.string,
    onSelectionChange: PropTypes.func,
    testName: PropTypes.string
};

RadioBar.defaultProps = {
    testName: 'RadioBar_test'
};

export default RadioBar;
