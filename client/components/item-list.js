import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './item';
import {
  filter,
  convertDate,
  isOverdue,
  isDueToday,
  isDueTomorrow
} from '../utils/filter-utils';

export class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  getLabel(filter) {
    if (filter === 'overdue') return (<label className='tab-label'>{ 'Overdue' }</label>);
    if (filter === 'completed') return (<label className='tab-label'>{ 'Completed' }</label>);

    return (<label className='tab-label'>{ 'All' }</label>);
  }

  render() {
    if (this.props.filter === 'soon') {
      return (
        <div className='item-list'>
          <div className='due-today'>
            <label className='tab-label'>{ 'Today' }</label>
            { filter(this.props.items, 'today').map(item =>
              <Item key={ item._id } item={ item } deleteItem={ this.props.deleteItem } selectItem={ this.props.selectItem }/>
            )}
          </div>
          <div className='due-tomo'>
            <label className='tab-label'>{ 'Tomorrow' }</label>
            { filter(this.props.items, 'tomorrow').map(item =>
              <Item key={ item._id } item={ item } deleteItem={ this.props.deleteItem } selectItem={ this.props.selectItem }/>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className='item-list'>
        { this.getLabel(this.props.filter) }
        { filter(this.props.items, this.props.filter).map(item => {
            let type = '';
            const due = convertDate(item.dueBy),
              now = new Date();
            now.setHours(0, 0, 0, 0);

            if (isOverdue(due, now)) type = 'overdue';
            if (isDueToday(due, now) || isDueTomorrow(due, now)) type = 'overdue';

            return (
              <Item
                key={ item._id }
                deleteItem={ this.props.deleteItem }
                item={ item }
                selectItem={ this.props.selectItem }
                type={ type }
              />
            );
          }
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
