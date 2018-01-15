import React from 'react';
import PropTypes from 'prop-types';
import RadioBar from './components/RadioBar';

const TransactionTypes = ({ onTranTypeSelect, transactionType }) => {
    const types = [
        { key: 'ALL', name: 'All deposit mehtods' },
        { key: 'PAYSAFECARD', name: 'Paysafecard' },
        { key: 'CITADEL', name: 'Citadel' },
        { key: 'CREDIT_DEBIT_CARD', name: 'Credit/Debit Card' },
        { key: 'ONLINE_BANKING', name: 'Online Banking' },
        { key: 'NETELLER', name: 'Neteller' },
        { key: 'BANK_TRANSFER', name: 'Bank Transfer' },
        { key: 'TRUSTLY', name: 'Trustly' },
        { key: 'SKRILL', name: 'Skrill' },
        { key: 'DIRECT BANKING', name: 'Direct Banking' }
    ];
    const selected = transactionType || 'ALL';

    return (
        <div>
            <RadioBar options={ types } selected={ selected } onSelectionChange={ onTranTypeSelect }/>
        </div>
    );
};

TransactionTypes.propTypes = {
    onTranTypeSelect: PropTypes.func.isRequired
};

export default TransactionTypes;