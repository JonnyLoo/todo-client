import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './form/button';
import { TextInput } from './form/text-input';
import { Checkbox } from './form/checkbox';

// view item details
export class ViewItemWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if nothing is selected then display a message
    if (!this.props.viewItemForm.isSelected) {
      return (
        <div className='view-item-widget no-item-selected'>
          { 'Select an item to view it\'s details here' }
        </div>
      );
    }

    return (
      <div className='view-item-widget'>
        <label className='view-item-label'>Item Details</label>
        <TextInput
          field='name'
          form='viewItem'
          label='Name'
          updateForm={this.props.updateForm}
          value={this.props.viewItemForm.name}
        />
        <TextInput
          field='description'
          form='viewItem'
          label='Description'
          updateForm={this.props.updateForm}
          value={this.props.viewItemForm.description}
        />
        <TextInput
          field='dueBy'
          form='viewItem'
          label='Due Date'
          type='date'
          updateForm={this.props.updateForm}
          value={this.props.viewItemForm.dueBy}
        />
        <Checkbox
          checked={this.props.viewItemForm.completed}
          field='completed'
          form='viewItem'
          label='Done'
          updateForm={this.props.updateForm}
        />
        <Button
          label='Save'
          customOnClick={this.props.updateItem.bind(this, this.props.viewItemForm._id)}
        />
      </div>
    );
  }
}

ViewItemWidget.propTypes = {
  updateForm: PropTypes.func,
  updateItem: PropTypes.func,
  viewItemForm: PropTypes.object
};
