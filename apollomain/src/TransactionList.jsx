import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const transactionListStyles = (props) => props.theme.skins.TransactionList.Container(props);
const StyledTransactionList = styled.div`${transactionListStyles}`;

const TransactionList = ({ activities }) => {
    console.log('Activities: ', activities);

    const activityListMobile = activities.map((act, ix) => {
        return (
            <div key={ ix } className="mobile-row">
                <div className="cell">
                    <div className="cell-top">
                        <div>{ act.date }</div>
                        <div>{ act.time }</div>
                    </div>
                    <div className="cell-bottom">{ act.dateRef }</div>
                </div>
                <div className="cell">
                    <div className="cell-top"><b>{ act.method.name }</b></div>
                    <div className="cell-top">
                        <div>{ act.method.type }</div>
                        <div>{ act.method.id }</div>
                    </div>
                    <div className="cell-bottom">
                        { act.method.methodRef }
                    </div>
                </div>
                <div className="cell">
                    <div className="cell-top">
                        <b>{ act.amount }</b>
                    </div>
                </div>
            </div>
        );
    });

    const activityListDesktop = activities.map((act, ix) => {
        return (
            <div key={ ix } className="desktop-row">
                <div className="cell"><span>{ act.date }</span></div>
                <div className="cell"><span>{ act.time }</span></div>
                <div className="cell">{ act.dateRef }</div>
                <div className="cell"><span>{ act.method.name }</span></div>
                <div className="cell">{ act.method.type }</div>
                <div className="cell">{ act.method.id }</div>
                <div className="cell">{ act.method.methodRef }</div>
                <div className="cell"><span>{ act.amount }</span></div>
            </div>
        );
    });

    return (
        <StyledTransactionList>
            <div className="table">
                <div className="headerRowMobile">
                    <div className="headerCell">
                        Date/ID
                    </div>
                    <div className="headerCell">
                        Type/Reference
                    </div>
                    <div className="headerCell">
                        Amount(£)
                    </div>
                </div>
                <div className="headerRowDesktop">
                    <div className="headerCell">
                        Date
                    </div>
                    <div className="headerCell">
                        Time
                    </div>
                    <div className="headerCell">
                        Date reference
                    </div>
                    <div className="headerCell">
                        Method
                    </div>
                    <div className="headerCell">
                        Type
                    </div>
                    <div className="headerCell">
                        Id
                    </div>
                    <div className="headerCell">
                        Method reference
                    </div>
                    <div className="headerCell">
                        Amount(£)
                    </div>
                </div>
                { activityListMobile }
                { activityListDesktop }
            </div>
        </StyledTransactionList>
    );
};

TransactionList.propTypes = {
    activities: PropTypes.arrayOf(PropTypes.object)
};

export default TransactionList;