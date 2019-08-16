// list of all the items
import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './item';
import { filter } from '../utils/filter-utils';
import {
  convertDate,
  isOverdue,
  isDueToday,
  isDueTomorrow
} from '../utils/date-utils';

export class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  // gets different labels depending on the filter
  getLabel(filter) {
    if (filter === 'overdue') return (<label className='tab-label'>Overdue</label>);
    if (filter === 'completed') return (<label className='tab-label'>Completed</label>);

    return (<label className='tab-label'>Todo</label>);
  }

  // this component has two forms, one where it's just one list
  // the other is when the 'soon' filter is applied
  // then it splits into two sections, one for today and one for tomorrow
  render() {
    // maps each item to an Item component
    if (this.props.filter === 'soon') {
      return (
        <div className='item-list'>
          <div className='due-today'>
            <label className='tab-label'>Today</label>
            { filter(this.props.items, 'today').map((item) => <Item key={item._id} item={item} deleteItem={this.props.deleteItem} selectItem={this.props.selectItem} />)}
          </div>
          <div className='due-tomo'>
            <label className='tab-label'>Tomorrow</label>
            { filter(this.props.items, 'tomorrow').map((item) => <Item key={item._id} item={item} deleteItem={this.props.deleteItem} selectItem={this.props.selectItem} />)}
          </div>
        </div>
      );
    }

    return (
      <div className='item-list'>
        { this.getLabel(this.props.filter) }
        { filter(this.props.items, this.props.filter).map((item) => {
          let type = '';
          // dates are not fun
          const due = convertDate(item.dueBy);
          const now = new Date();
          // set time to the start of the day (12:00 AM)
          now.setHours(0, 0, 0, 0);

          // determine the type of each item
          // allows for visual indication of which item falls in which category
          // mainly just useful for the main / non-filtered list
          if (isOverdue(due, now)) type = 'overdue';
          if (isDueToday(due, now) || isDueTomorrow(due, now)) type = 'soon';

          return (
            <Item
              key={item._id}
              deleteItem={this.props.deleteItem}
              item={item}
              selectItem={this.props.selectItem}
              type={type}
            />
          );
        })}
      </div>
    );
  }
}

ItemList.propTypes = {
  deleteItem: PropTypes.func,
  filter: PropTypes.string,
  items: PropTypes.array,
  selectItem: PropTypes.func
};
