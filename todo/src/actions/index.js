export const ADD_TODO = 'ADD_TODO';
export function addTodo(newTodo) {
      console.log(newTodo);
      return {
            type: ADD_TODO,
            payload: newTodo
      };
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = i => {
      return {
            type: TOGGLE_TODO,
            payload: i
      };
};

