import { createSlice } from '@reduxjs/toolkit';

import { FOOD } from "../app/shared/FOOD";


const initialState = {
    foodArray: FOOD
}

const foodSlice = createSlice({
    name: 'foodImg',
    initialState
});

export const foodImgReducer = foodSlice.reducer;


export const selectAllFood = (state) => {
    return state.foodImg.foodArray ;
};

