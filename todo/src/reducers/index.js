

const initialState = {
      title: "Kayla's Todo List",
      todoList: []
};

function reducer(state = initialState, action) {
      switch (action.type) {
            case ADD_TODO:
                  return {
                        ...state, 
                        todoList: action.payload
                  }
            
      }
}

export default reducer;