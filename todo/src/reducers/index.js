

const initialState = {
      title: "Kayla's Favorite Movies",
      movies: [
            { id: 1 },
            { name: "Stripes"},
            { year: "1981"},
            { favoriteLine: "you can't go, all the plants are gonna die."},
            { stars: ["Bill Murray", "John Candy", "Harold Ramis"]}
      ]
};

function reducer(state = initialState, action) {
      switch (action.type) {
            case ADD_MOVIE:
                  return {
                        ...state, 
                        movies: [
                              ...state.movies,
                              { name: action.payload }
                        ]
                  }
            case REMOVE_MOVIE:
                  return {
                        ...state,
                        movies: action.payload
                  }
      }
}

export default reducer;