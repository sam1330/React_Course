import { shallow } from "enzyme";
import React from "react";
import TodoAdd from "../../../components/08-useReducer/components/TodoAdd";

describe("<TodoAdd /> tests", () => {

  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />
  )
  test('should render the component', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('should NOT call the handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() { } });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('should call handleAddTodo', () => {

    const value = 'Learn React';

    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() { } });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });

    expect(wrapper.find('input').prop('value')).toBe('');

  });

});