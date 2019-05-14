export const ADD_MOVIE = 'ADD_MOVIE';
export function addMovie(newMovie) {
      console.log(newMovie);
      return {
            type: ADD_MOVIE,
            payload: newMovie
      };
}

export const EDIT_MOVIE = 'EDIT_MOVIE';
export function editMovie(editedMovie) {
      console.log(editedMovie);
      return {
            type: EDIT_MOVIE,
            payload: editedMovie
      };
}