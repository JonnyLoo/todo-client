// filters items based on selected tab
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
          applyFilter={this.props.applyFilter}
          filter='default'
          name='All'
          selectedFilter={this.props.selectedFilter}
        />
        <FilterTab
          applyFilter={this.props.applyFilter}
          filter='soon'
          name='Due soon'
          selectedFilter={this.props.selectedFilter}
        />
        <FilterTab
          applyFilter={this.props.applyFilter}
          filter='overdue'
          name='Overdue'
          selectedFilter={this.props.selectedFilter}
        />
        <FilterTab
          applyFilter={this.props.applyFilter}
          filter='completed'
          name='Completed'
          selectedFilter={this.props.selectedFilter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  applyFilter: PropTypes.func,
  selectedFilter: PropTypes.string
};
