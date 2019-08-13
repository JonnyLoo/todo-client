import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as TodoListActions from '../actions/todo-list-actions';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  render() {
    if (this.props.isFetching) {
      return (<div className='center'>{ 'Loading...' }</div>);
    }

    return (
      <div className='center'>
        {this.props.error ? (
          <div className='todo-list-error'>{ 'error' }</div>
        ) :
        (
          <div className='todo-list'>
            { this.props.items.map(item => <div>{ item.name }</div>) }
          </div>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.todoList.name,
    items: state.todoList.items,
    isFetching: state.todoList.isFetching,
    error: state.todoList.error
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
  getTodoList: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
