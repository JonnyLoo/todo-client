// basic unit tests for the todo list component
import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoList } from 'components/todo-list';

const getTodoListMock = jest.fn();
let props = {
  error: null,
  getTodoList: getTodoListMock,
  isFetching: false
}

// just did some basic tests with shallow rendering
describe('TodoList Component', () => {
  beforeEach(() => {
    props = {
      error: null,
      getTodoList: getTodoListMock,
      isFetching: false
    };
  });

  it('should render the todo list', () => {
    const wrapper = shallow(<TodoList {...props} />);

    expect(wrapper.find('.todo-list')).toHaveLength(1);
    expect(getTodoListMock).toHaveBeenCalled();
  });

  it('should render LOADING... when fetching initial data', () => {
    props.isFetching = true;
    const wrapper = shallow(<TodoList {...props} />);

    expect(wrapper.find('.center').text()).toEqual('LOADING...');
  });

  it('should render ERROR when there\'s an error', () => {
    props.error = { error: 'error' };
    const wrapper = shallow(<TodoList {...props} />);

    expect(wrapper.find('.center').text()).toEqual('ERROR');
  });
})
