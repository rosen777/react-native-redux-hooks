export const FETCH_DATA = 'FETCH_DATA';

const initialState = [];

const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, action.payload];
  }
  return state;
};

export default beersReducer;
