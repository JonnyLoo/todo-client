// basic button component
import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    if (this.props.customOnClick) {
      this.props.customOnClick();
    }
  }

  render() {
    return (
      <button className='btn' onClick={this.onClick.bind(this)}>
        { this.props.label }
      </button>
    );
  }
}

Button.propTypes = {
  customOnClick: PropTypes.func,
  label: PropTypes.string
};
