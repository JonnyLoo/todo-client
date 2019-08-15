import React from 'react';
import PropTypes from 'prop-types';

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(evt) {
    this.props.updateForm(this.props.form, this.props.field, evt.target.checked);
  }

  render() {
    return (
      <div className='checkbox'>
        <div className='checkbox-label'>{ this.props.label }</div>
        <input className='checkbox-input' type='checkbox' checked={this.props.checked} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  field: PropTypes.string,
  form: PropTypes.string,
  label: PropTypes.string,
  updateForm: PropTypes.func
};
