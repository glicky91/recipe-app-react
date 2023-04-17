import { configureStore } from '@reduxjs/toolkit';
import { foodImgReducer } from '../components/foodSlice';
import { recipesFavReducer } from '../components/recipeListSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipesFav: recipesFavReducer,
    foodImg: foodImgReducer

  },
});
