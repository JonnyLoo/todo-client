import React from 'react';
import TodoList from './todo-list';

// there's no routing in this app so it just simply renders the one component
export default class App extends React.Component {
  render() {
    return (
      <TodoList />
    );
  }
}
