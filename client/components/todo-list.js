import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as TodoListActions from '../actions/todo-list-actions';
import { ItemList } from './item-list';
import { AddItemWidget } from './add-item-widget';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  render() {
    // on left, add-item-widget and item-details-widget
    // item-details-widget displays message 'click on an item to view it's details'
    // right will be the list of items
    if (this.props.isFetching) {
      return (<div className='center'>{ 'LOADING...' }</div>);
    }

    return (this.props.error ? <div className='todo-list-error'>{ 'ERROR' }</div> :
      <div className='todo-list'>
        <AddItemWidget
          addItemForm={ this.props.addItemForm }
          createItem={ this.props.createItem }
          updateForm={ this.props.updateForm }
        />
        <ItemList
          items={ this.props.items }
          deleteItem={ this.props.deleteItem }
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.todoList.name,
    items: state.todoList.items,
    isFetching: state.todoList.isFetching,
    error: state.todoList.error,
    selectedItemForm: state.todoList.selectedItemForm,
    addItemForm: state.todoList.addItemForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      TodoListActions
    ),
    dispatch
  );
};

TodoList.propTypes = {
  items: PropTypes.array,
  getTodoList: PropTypes.func,
  deleteItem: PropTypes.func,
  createItem: PropTypes.func,
  updateForm: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
