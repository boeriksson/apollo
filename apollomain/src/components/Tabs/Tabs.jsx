import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CoreComponents from '@kindred-payment/pay-provider-ui-common/lib/CoreComponents';

const Icon = CoreComponents.icon;
const tabStyles = (props) => props.theme.skins.Tabs.Container(props);
const StyledTabs = styled.div`${tabStyles}`;

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        this.tabSelect = this.tabSelect.bind(this);
    }

    tabSelect(tab) {
        this.setState({ expanded: !this.state.expanded });
        this.props.clickSelect(tab);
    }

    render() {
        const {tabs} = this.props;
        const renderedTabs = tabs.map((tab, ix) => {
            return (<li
                key={ix}
                className={ tab.selected ? 'selected' : ''}
                onClick={ () => this.tabSelect(tab) }
            ><a>{tab.label}<Icon className="arrowDown" icon="arrowDown"/></a></li>);
        });
        let dropDownTabs = null;
        if (this.state.expanded) {
           dropDownTabs = <ul className="dropdown">{ renderedTabs }</ul>;
        }

        return (
            <StyledTabs>
                <ul>
                    { renderedTabs }
                </ul>
                { dropDownTabs }
            </StyledTabs>
        );
    }
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        selected: PropTypes.bool
    })).isRequired,
    clickSelect: PropTypes.func.isRequired
};

export default Tabs;