import React from 'react';
import PropTypes from 'prop-types';

export class FilterTab extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    // set filter value in state
    this.props.applyFilter(this.props.filter);
  }

  render() {
    // should probably use classnames package to deal with classes
    const isSelected = this.props.filter === this.props.selectedFilter;
    return (
      <div className={`filter-tab ${this.props.filter} ${isSelected ? 'selected': ''}`} onClick={this.onClick.bind(this)}>{ this.props.name }</div>
    );
  }
}

FilterTab.propTypes = {
  applyFilter: PropTypes.func,
  filter: PropTypes.string,
  name: PropTypes.string,
  selectedFilter: PropTypes.string
};
