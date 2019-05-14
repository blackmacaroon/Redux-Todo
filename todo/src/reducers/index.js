import { ADD_TODO, TOGGLE_TODO} from '../actions/index'

const initialState = {
      title: "Kayla's Todo List",
      todoList: [
            { todo: 'drink water', done: false},
            { todo: 'run', done: false}
      ]
};

function reducer(state = initialState, action) {
      switch (action.type) {
            case ADD_TODO:
                  return {
                        ...state, 
                        todoList: action.payload
                  }
            case TOGGLE_TODO:
                  return{

                  }
            
      }
}

export default reducer;