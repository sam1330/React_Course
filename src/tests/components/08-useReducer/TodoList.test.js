import { shallow } from "enzyme";
import React from "react";

import TodoList from "../../../components/08-useReducer/components/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe('<TodoList /> tests', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();


  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should render the component', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('should render <TodoListItem /> with Its properties', () => {

    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));

  });
});