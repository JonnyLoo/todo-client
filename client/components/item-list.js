import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './item';

export class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item-list'>
        { this.props.items.map(item =>
          <Item key={ item._id } item={ item } deleteItem={ this.props.deleteItem } selectItem={ this.props.selectItem }/>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  deleteItem: PropTypes.func,
  items: PropTypes.array,
  selectItem: PropTypes.func
}
