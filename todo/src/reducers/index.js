import { ADD_TODO, TOGGLE_TODO} from '../actions/index'

const initialState = {
      todos: []
};

function reducer(state = initialState, action) {
      switch (action.type) {
            case ADD_TODO:
                  const newTodo = {
                        todo: action.payload,
                        completed: false
                  }
                  return {
                        ...state, 
                        todos: [...state.todos, newTodo]
                  }
            case TOGGLE_TODO:
                  return{
                        ...state,
                        todos: state.todos.map(todo, i)
                        ///


                  }
            default:
                  return state;
            
      }
}

export default reducer;