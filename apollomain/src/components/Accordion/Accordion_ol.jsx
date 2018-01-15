import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
    constructor(props) {
        super(props);
        const isOpen = props.elements.map((element) => {
            return element.isOpen || false;
        });
        this.state = {
            isOpen
        }
    }
    toggleElement(ix) {
        const { isOpen } = this.state;
        if (!this.props.multiSelectable) {
            for (let i = 0; i < isOpen.length; i++) {
                if (i !== ix) isOpen[i] = false;
            }
        }
        isOpen[ix] = !isOpen[ix];
        this.setState({ isOpen });
    }
    render() {
        const { multiSelectable, elements } = this.props;
        const accord = elements.map((element, ix) => {
            const elementBody = this.state.isOpen[ix] ? element.panel : null;
            return (
                <div className="element" key={ix}>
                    <div className="header">
                        { element.label }
                        <span onClick={ (e) => this.toggleElement(ix) }>+</span>
                    </div>
                    <div>
                        { elementBody }
                    </div>
                </div>
            );
        });
        return <div>{ accord }</div>;
    }
}

Accordion.propTypes = {
    multiSelectable: PropTypes.bool,
    elements: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        panel: PropTypes.element.isRequired,
        isOpen: PropTypes.bool
    }))
};

Accordion.defaultProps = {
    multiSelectable: true,
    elements: []
};

export default Accordion;
