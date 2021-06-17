const SET_UI_DATA = 'SET_UI_DATA';
const CLEAR_UI_DATA = 'CLEAR_UI_DATA';

export function setUIData(response) {
  return {
    type: SET_UI_DATA,
    data: response,
  };
}

export function clearUIData() {
  return {
    type: CLEAR_UI_DATA,
  };
}

const initialState = {
  loader: false,
  loadingText: 'loading..',
  loadingTextColor: 'white',
};

export const reducer = (state = initialState, action) => {
  const {type, data} = action;

  switch (type) {
    case SET_UI_DATA:
      return Object.assign({}, state, data);
    case CLEAR_UI_DATA:
      return initialState;
    default:
      return state;
  }
};
