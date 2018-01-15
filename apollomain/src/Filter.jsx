import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CoreComponents from '@kindred-payment/pay-provider-ui-common/lib/CoreComponents';

import Accordion from './components/Accordion';
import TransactionTypes from './TransactionTypes';
import FilterPeriod from './FilterPeriod';
import Close from './components/cssIcons/Close';

import 'react-dates/initialize';
import DatePicker from './components/Datepicker/DatePicker';

const Button = CoreComponents.button;

const filterStyles = (props) => props.theme.skins.Filter.Container(props);
const StyledFilter = styled.div`${filterStyles}`;

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData: props.filterData
        };
        this.onTranTypeSelect = this.onTranTypeSelect.bind(this);
        this.onPeriodSelect = this.onPeriodSelect.bind(this);
    }

    onTranTypeSelect(tranType) {
        this.setState({ filterData: {
                ...this.state.filterCriteria,
                transactionType: tranType
            }
        });
    }

    onPeriodSelect(period) {
        this.setState({ filterData: {
                ...this.state.filterCriteria,
                period
            }
        });
    }

    render() {
        const { filterData } = this.state;
        let dateLabel = 'Date';
        let type = 'Type';
        if ('dateRange' in filterData) {
            const {fromDate, toDate} = filterData.dateRange;
            const dateSuffix = ` - ${fromDate} - ${toDate}`;
            dateLabel = `Date ${dateSuffix}`;
        }
        if ('transactionType' in filterData) {
            type = `Type - ${filterData.transactionType}`;
        }

        return (
            <StyledFilter>
                <div className="header">
                    <Close callback={ this.props.closeFilter }/>
                    <div className="centered">
                        <span>Filter</span>
                    </div>
                </div>
                <Accordion multiSelectable={ false }>
                    <Accordion.Section title={ dateLabel }>
                        <div>
                            <FilterPeriod onPeriodSelect={ this.onPeriodSelect } period={ filterData.period }/>
                            <DatePicker/>
                        </div>
                    </Accordion.Section>
                    <Accordion.Section title={ type }>
                        <TransactionTypes
                            onTranTypeSelect={ this.onTranTypeSelect }
                            transactionType={ filterData.transactionType }/>
                    </Accordion.Section>
                </Accordion>
                <div className="filterFooter">
                    <span>reset filter</span>
                    <Button kind='secondary' onClick={ this.props.applyFilter }><span>Apply</span></Button>
                </div>
            </StyledFilter>
        );
    }
}

Filter.propTypes = {
    filterData: PropTypes.shape({
        dateRange: PropTypes.shape({
            fromDate: PropTypes.number.isRequired,
            toDate: PropTypes.number.isRequired
        })
    }).isRequired,
    applyFilter: PropTypes.func.isRequired,
    closeFilter: PropTypes.func.isRequired
};

export default Filter;