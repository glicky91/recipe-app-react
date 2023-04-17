import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalOpen: false
}

const editRecipeFormSlice = createSlice({
    name: 'erfSlice',
    initialState
});

export const erfSliceReducer = editRecipeFormSlice.reducer;


export const selecterfState = (state) => {
    return state.erfSlice.modalOpen ;
};

