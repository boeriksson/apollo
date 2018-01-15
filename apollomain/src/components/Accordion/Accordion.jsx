import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Plus from '../cssIcons/Plus';
import Minus from '../cssIcons/Minus';

const accordionStyles = (props) => props.theme.skins.Accordion.Container(props);
const sectionStyles = (props) => props.theme.skins.Accordion.Section(props);

const StyledAccordion = styled.div`${accordionStyles}`;
const StyledSection = styled.div`${sectionStyles}`;

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSelect = this.onSelect.bind(this);
    }
    onSelect(id) {
        this.setState({ selected: this.state.selected === id ? null : id })
    }
    render() {
        let childId = 0;
        const decorateChildren = (child) => {
            const selectedId = this.state.selected;
            const id = childId++;
            const addProps = {
                id,
                selected: id == selectedId,
                onSelect: this.onSelect
            };
            return React.cloneElement(child, addProps);
        };
        const decChildren = React.Children.map(this.props.children, decorateChildren);
        return <StyledAccordion className="main">{ decChildren }</StyledAccordion>;
    }
}

Accordion.Section = ({ title, id, selected, onSelect, children }) => {
    const className = selected ? 'selected' : '';
    const icon = selected ? <Minus/> : <Plus/>;
    return (
        <StyledSection className={ className }>
            <div className="sectionHead" onClick={ () => onSelect(id) }>
                { title }
                { icon }
            </div>
            <div className="sectionBody">
                { children }
            </div>
        </StyledSection>
    );
};
Accordion.propTypes = {
    multiSelectable: PropTypes.bool
};

Accordion.Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

Accordion.defaultProps = {
    multiSelectable: true
};

export default Accordion;
