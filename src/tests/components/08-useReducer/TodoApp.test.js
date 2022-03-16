import { act } from "@testing-library/react";
import { shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";


describe('<TodoApp /> tests', () => {

  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add todo', () => {
    const wrapper = shallow(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('TodoList').prop('todos').length).toBe(2);
  });

  test('should delete todo', () => {

    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 1 )');

    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 0 )');

  });
});