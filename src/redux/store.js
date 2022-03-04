import {configureStore} from '@reduxjs/toolkit';

import cartItemsReducer from './cartItemsReducer';
import beersReducer from './beersReducer';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    beers: beersReducer,
  },
});

export default store;
