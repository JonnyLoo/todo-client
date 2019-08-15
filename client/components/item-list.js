import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './item';
import { applyFilter } from '../utils/filter-utils';

export class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item-list'>
        { applyFilter(this.props.items, this.props.filter).map(item =>
          <Item key={ item._id } item={ item } deleteItem={ this.props.deleteItem } selectItem={ this.props.selectItem }/>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  deleteItem: PropTypes.func,
  filter: PropTypes.string,
  items: PropTypes.array,
  selectItem: PropTypes.func
}
