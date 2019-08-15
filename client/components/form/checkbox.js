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
    console.log(this.props.checked);
    return (
      <div className='checkbox-input'>
        <label className='checkbox-input-label'>{ this.props.label }</label>
        <input className='checkbox-input-input' type='checkbox' checked={ this.props.checked } onChange={ this.onChange.bind(this) } />
      </div>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  field: PropTypes.string,
  form: PropTypes.string,
  label: PropTypes.string,
  updateForm: PropTypes.func
}
