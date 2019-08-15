import React from 'react';
import PropTypes from 'prop-types';

export class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(evt) {
    this.props.updateForm(this.props.form, this.props.field, evt.target.value);
  }

  render() {
    return (
      <div className='txt-input'>
        <div className='txt-input-label'>{ this.props.label }</div>
        <input
          className='txt-input-input'
          type={ this.props.type && this.props.type === 'date' ? this.props.type : 'text'}
          value={ this.props.value }
          onChange={ this.onChange.bind(this) }
          placeholder={ this.props.label }
        />
      </div>
    )
  }
}

TextInput.propTypes = {
  field: PropTypes.string,
  form: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  updateForm: PropTypes.func,
  value: PropTypes.string
}
