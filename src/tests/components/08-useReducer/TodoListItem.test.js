import { shallow } from "enzyme";
import React from "react";
import TodoListItem from "../../../components/08-useReducer/components/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";


describe("<TodoListItem /> tests", () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should render the component', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('should call handleDelete', () => {

    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

  });
  
  test('should call handleToggle', () => {

    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

  });
 
  test('should show the todo text', () => {

    const p = wrapper.find('p').text();

    expect(p).toBe(`1. ${demoTodos[0].desc.trim()}`)

  });

  test('should apply complete className', () => {
    
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
      />
    );

    expect(wrapper.find('li').hasClass('done')).toBe(true);

  });
});