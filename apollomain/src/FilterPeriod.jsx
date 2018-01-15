import React from 'react';
import PropTypes from 'prop-types';
import RadioBar from './components/RadioBar';

const FilterPeriod = ({ onPeriodSelect, period }) => {
    const types = [
        { key: 'ALL', name: 'All deposits' },
        { key: 'OCT', name: 'October 2017' },
        { key: 'SEP', name: 'September 2017' },
        { key: 'CUSTOM', name: 'Custom' }
    ];
    const selected = period || 'ALL';

    return (
        <div>
            <RadioBar options={ types } selected={ selected } onSelectionChange={ onPeriodSelect }/>
        </div>
    );
};

FilterPeriod.propTypes = {
    onPeriodSelect: PropTypes.func.isRequired
};

export default FilterPeriod;