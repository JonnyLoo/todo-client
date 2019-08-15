import React from 'react';
import PropTypes from 'prop-types';
import { FilterTab } from './filter-tab';

export class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='filter-tabs'>
        <FilterTab
          applyFilter={ this.props.applyFilter }
          filter={ 'default' }
          name={ 'All' }
        />
        <FilterTab
          applyFilter={ this.props.applyFilter }
          filter={ 'soon' }
          name={ 'Due soon' }
        />
        <FilterTab
          applyFilter={ this.props.applyFilter }
          filter={ 'overdue' }
          name={ 'Overdue' }
        />
        <FilterTab
          applyFilter={ this.props.applyFilter }
          filter={ 'completed' }
          name={ 'Completed' }
        />
      </div>
    );
  }
}

Filter.propTypes = {
  applyFilter: PropTypes.func
}
