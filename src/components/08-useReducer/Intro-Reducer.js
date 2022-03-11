const initialState = [{
  id: 1,
  todo: "Comprar leche",
  done: false,
}];

const todoReducer = (state = initialState, action) => {

  if (action?.type === 'agregar') {
    state = [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar pan",
  done: false,
}

const addTodoAction = {
  type: "agregar",
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);