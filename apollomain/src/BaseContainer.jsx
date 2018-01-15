import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, gql, compose } from 'react-apollo';

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
        console.log('this.props: ', this.props);
        const {
            allDeposits: { loading: depositsLoading, error: depositsError, deposits },
            allWithdrawals: { loading: withdrawalsLoading, error: withdrawalError, withdrawals } } = this.props;
        const { filter, filterData, tabList } = this.state;
        if (depositsLoading || withdrawalsLoading) {
            return <p>Loading...</p>;
        }
        if (depositsError || withdrawalError) {
            return <div>
                <p>Deposit Error: {depositsError.message}</p>
                <p>Withdrawal Error: {withdrawalError.message}</p>
            </div>
        }

        console.log('withdawals: ', withdrawals);

        const base = (
            <StyledBase>
                <h1>History</h1>
                <Tabs tabs={ tabList } clickSelect={ this.selectTab } />
                <div className="filterButtonContainer">
                    <Button kind='secondary' onClick={ e => this.setState({ filter: !filter }) }><span>Filter</span></Button>
                </div>
                <TransactionList activities={ deposits }/>
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
        deposits: PropTypes.arrayOf(PropTypes.shape({
            depositRef: PropTypes.string,
            time: PropTypes.string,
            date: PropTypes.string,
            method: PropTypes.shape({
                name: PropTypes.string,
                type: PropTypes.string,
                id: PropTypes.string,
                amount: PropTypes.string
            }),
            amount: PropTypes.number
        })),
        withdrawals: PropTypes.arrayOf(PropTypes.shape({
            withdrawalRef: PropTypes.string,
            state: PropTypes.object
        }))
    })
};


export default compose(
    graphql(
        gql`
            query AllDeposits {
                deposits {
                    date
                    time
                    depositRef
                    method {
                        name
                        type
                        id
                        methodRef
                    }
                    amount
                }
            }
        `
    ,{ name: 'allDeposits' }),
    graphql(
        gql`
            query Allwithdrawals {
                withdrawals {
                    withdrawalRef
                    states {
                        type
                    }
                }
            }
        `
    ,{ name: 'allWithdrawals' })
)(BaseContainer);
