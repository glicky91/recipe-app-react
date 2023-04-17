//Try 1 of figuring this out... Not sure this is right look to editrecipeformslice for try 2

import { createSlice } from "@reduxjs/toolkit";
//Maybe don't need this... we can use state from test_recipes??
const initialState = {
    currentTitle: title
};

const editTitleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setCurrentTitle: (state,action)=>{
            return {
                 ...state, 
                 currentTitle: action.payload 
            }
        }
    }
});

export const titleReducer = editTitleSlice.reducer;

export const {setCurrentTitle} = editTitleSlice.actions;

export const selectCurrentTitle = (state)=> {
    return state.title.currentTitle;
};