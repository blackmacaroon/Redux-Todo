import { ADD_TODO, TOGGLE_TODO} from '../actions/index'

const initialState = {
      todos: []
};

function reducer(state = initialState, action) {
      switch (action.type) {
            case ADD_TODO:
            const newTodo = {
                  value: action.payload, 
                  completed: false
            }
                  return {
                        ...state, 
                        todos: [
                              ...state.todos, newTodo
                        ]
                  }
            case TOGGLE_TODO:
                  return{
                        ...state,
                        todos: state.todos.map((todo, i) => {
                              if (i === action.payload) {
                                    return {
                                          ...todo,
                                          completed: !todo.completed
                                    }
                              }
                              return todo;
                                 
                        })
                  }
            default:
                  return state;
            
      }
}

export default reducer;