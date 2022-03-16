
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("todoReducer tests", () => {

  test('should return default state', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });
  
  test('should add todo', () => {

    const newTodo = {
      id: 3,
      desc: "Hello new todo",
      done: false
    };

    const state = todoReducer(demoTodos, {
      type: 'add',
      payload: newTodo
    });

    expect(state).toEqual([...demoTodos, newTodo]);
    expect(state.length).toBe(3);
  });

  test('should delete a todo', () => {
    const state = todoReducer(demoTodos, {
      type: 'delete',
      payload: 1
    });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]])
  });

  test('should toggle done a todo', () => {
    const state = todoReducer(demoTodos, {
      type: 'toggle',
      payload: 1
    });

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });

});