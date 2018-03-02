const todoId = {
  currentTodoId: 0
};

const countNextId = () => {
  console.log(todoId);
  todoId.currentTodoId += 1;
  return todoId.currentTodoId;
};

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: countNextId(),
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});
