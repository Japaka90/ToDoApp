const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.id) {
          return [...state.slice(0, i), ...state.slice(i + 1)];
        }
      }
      return state;
    default:
      return state;
  }
};

export default todos;
