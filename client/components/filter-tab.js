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
    return (
      <div className={`filter-tab ${this.props.filter}`} onClick={this.onClick.bind(this)}>{ this.props.name }</div>
    );
  }
}

FilterTab.propTypes = {
  applyFilter: PropTypes.func,
  filter: PropTypes.string,
  name: PropTypes.string
};
