import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

import CoreComponents from '@kindred-payment/pay-provider-ui-common/lib/CoreComponents';

import Tabs from './components/Tabs';
import TransactionList from './TransactionList';
import Filter from './Filter';

const Button = CoreComponents.button;

const StyledBase = styled.div`
    padding: 0 16px;
    h1:first-child {
        margin-top: 20px;
    }
    div.filterButtonContainer {
        text-align: center;
    }
    div > button {
        width: 80%;
        margin-bottom: 20px;
    }
`;

class BaseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false,
            filterCriteria: {},
            tabList: [
                { key: 'GAMING', label: 'Gaming', selected: true },
                { key: 'WITHDRAWALS', label: 'Withdrawals'},
                { key: 'DEPOSITS', label: 'Deposits'},
                { key: 'NEW_DEPOSITS', label: 'Net deposits'}
            ]
        };

        this.applyFilter = this.applyFilter.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.closeFilter = this.closeFilter.bind(this);
    }

    applyFilter(filterData) {
        this.setState({
            filter: false,
            filterCriteria
        });
        console.log('applying filter...');
    }

    closeFilter() {
        this.setState({ filter: false });
    }

    selectTab(selectedTab) {
        const newTabs = this.state.tabList.map((tab) => {
            tab.selected = (tab.key === selectedTab.key) ? tab.selected = true : tab.selected = false;
            return tab;
        });
        this.setState({ tabList: newTabs });
    }

    render() {
        const {data: {loading, error, activities}} = this.props;
        const { filter, filterData, tabList } = this.state;
        console.log('in BaseContainer, activities: ', activities);
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>{error.message}</p>
        }

        const mockActivities = [
            {
                date: '01/09/2017',
                time: '18:12:45',
                dateRef: '1234546566',
                method: {
                    name: 'Card',
                    type: 'Mastercard',
                    id: '5522 00** **** 2346',
                    methodRef: '987654321'
                },
                amount: '20.00'
            },
            {
                date: '11/09/2017',
                time: '17:21:32',
                dateRef: '1264546563',
                method: {
                    name: 'Card',
                    type: 'Visa',
                    id: '5522 00** **** 2346',
                    methodRef: '987654321'
                },
                amount: '45.00'
            },
            {
                date: '14/09/2017',
                time: '09:33:10',
                dateRef: '1264546512',
                method: {
                    name: 'Entercash',
                    type: '',
                    id: '',
                    methodRef: '987654444'
                },
                amount: '200.00'
            },
            {
                date: '15/09/2017',
                time: '11:30:10',
                dateRef: '1264546666',
                method: {
                    name: 'Paypal',
                    type: '',
                    id: 'A-xx-ab2323',
                    methodRef: '94387651111'
                },
                amount: '32.00'
            },
            {
                date: '15/09/2017',
                time: '11:30:10',
                dateRef: '1264546666',
                method: {
                    name: 'Card',
                    type: 'Visa',
                    id: '232322',
                    methodRef: '94387651111'
                },
                amount: '96.00'
            },
        ];

        const base = (
            <StyledBase>
                <h1>History</h1>
                <Tabs tabs={ tabList } clickSelect={ this.selectTab } />
                <div className="filterButtonContainer">
                    <Button kind='secondary' onClick={ e => this.setState({ filter: !filter }) }><span>Filter</span></Button>
                </div>
                <TransactionList activities={ activities }/>
            </StyledBase>
        );

        const filterPanel = <Filter filterData={ filterData } applyFilter={ this.applyFilter } closeFilter={ this.closeFilter }/>;

        return this.state.filter ? filterPanel : base;
    }
}

BaseContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.object,
        gambling: PropTypes.arrayOf(PropTypes.shape({
            dAmount: PropTypes.number,
            date: PropTypes.number,
            dBets: PropTypes.number
        }))
    })
};

const baseQuery = gql`
    query BaseQuery {
        activities {
            date
            time
            dateRef
            method {
                name
                type
                id
                methodRef
            }
            amount
        }
    }
`;

export default graphql(baseQuery)(BaseContainer);
