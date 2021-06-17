const ADD_FAV_MOVIE = 'ADD_FAV_MOVIE';
const REMOVE_FAV_MOVIE = 'REMOVE_FAV_MOVIE';

export function addToFav(response) {
  return {
    type: ADD_FAV_MOVIE,
    data: response,
  };
}

export function removeFav(response) {
  return {
    type: REMOVE_FAV_MOVIE,
    data: response,
  };
}

const initialState = [];

export const reducer = (state = initialState, action) => {
  const {type, data} = action;

  switch (type) {
    case ADD_FAV_MOVIE:
      return [data, ...state];
    case REMOVE_FAV_MOVIE:
      return state.filter(movie => {
        return movie.imdbID !== data.imdbID;
      });
    default:
      return state;
  }
};
