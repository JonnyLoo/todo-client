import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './form/button';
import { TextInput } from './form/text-input';

// create new items
export class AddItemWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='add-item-widget'>
        <TextInput
          field={ 'name' }
          form={ 'addItem' }
          label={ 'Name' }
          updateForm={ this.props.updateForm }
          value={ this.props.addItemForm.name }
        />
        <TextInput
          field={ 'description' }
          form={ 'addItem' }
          label={ 'Description' }
          updateForm={ this.props.updateForm }
          value={ this.props.addItemForm.description }
        />
        <TextInput
          field={ 'dueBy' }
          form={ 'addItem' }
          label={ 'Due Date' }
          type={ 'date' }
          updateForm={ this.props.updateForm }
          value={ this.props.addItemForm.dueBy }
        />
        <Button
          label={ 'Add' }
          customOnClick={ this.props.createItem }
        />
      </div>
    );
  }
}

AddItemWidget.propTypes = {
  addItemForm: PropTypes.object,
  createItem: PropTypes.func,
  updateForm: PropTypes.func
}
