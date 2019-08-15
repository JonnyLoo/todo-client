import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as TodoListActions from '../actions/todo-list-actions';
import { ItemList } from './item-list';
import { AddItemWidget } from './add-item-widget';
import { ViewItemWidget } from './view-item-widget';
import { Filter } from './filter';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  render() {
    if (this.props.isFetching) {
      return (<div className='center'>{ 'LOADING...' }</div>);
    }

    return (this.props.error ? <div className='center todo-list-error'>{ 'ERROR' }</div> :
      <div className='todo-list'>
        <AddItemWidget
          addItemForm={ this.props.addItemForm }
          createItem={ this.props.createItem }
          updateForm={ this.props.updateForm }
        />
        <ViewItemWidget
          updateForm={ this.props.updateForm }
          updateItem={ this.props.updateItem }
          viewItemForm={ this.props.viewItemForm }
        />
        <ItemList
          deleteItem={ this.props.deleteItem }
          filter={ this.props.filter }
          items={ this.props.items }
          selectItem={ this.props.selectItem }
        />
        <Filter
          applyFilter={ this.props.applyFilter }
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
    viewItemForm: state.todoList.viewItemForm,
    addItemForm: state.todoList.addItemForm,
    filter: state.todoList.filter
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
  updateForm: PropTypes.func,
  updateItem: PropTypes.func,
  viewItemForm: PropTypes.object,
  addItemForm: PropTypes.object,
  selectItem: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
