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
    return (
      <div className='center'></div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.todoList.items
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
