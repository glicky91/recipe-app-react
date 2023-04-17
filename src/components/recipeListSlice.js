import { createSlice } from '@reduxjs/toolkit';
import { TEST_RECIPES } from "../app/shared/RECIPES";
import { v4 as uuid } from 'uuid';

const initialState = {
    recipeArray: TEST_RECIPES,
    searchQuery: ''
};

const recipeListSlice = createSlice({
    name: 'recipesFav',
    initialState,
    reducers: {
        newRecipe: (state, action) => {
            console.log('newRecipe action.payload', action.payload);
            console.log('newRecipe state.recipeArray', state.recipeArray);
            const newRecipe = {
                id: uuid(),
                ...action.payload
            };
            state.recipeArray.push(newRecipe);
        },
        removeRecipe: (state, action) => {
            const recipeId = action.payload;
            //can you explain why do i need to set steate.recipe = vs above we didint have ot?
            state.recipeArray = state.recipeArray.filter((recipe) =>
                recipe.id !== recipeId);
            console.log('removeRecipe action.payload', action.payload);
            console.log('removeRecipe state.recipeArray', state.recipeArray);
            //how do we get the code to know which recipe id?? Does this scoop method work?
            // state.recipeArray.filter((recipe)=> recipe.id !== action.payload.id);
            // console.log(action.payload.id)
        },

        editRecipe: (state, action) => {
            state.recipeArray = state.recipeArray.map(recipe =>
                (recipe.id === action.payload.id) ?
                    { ...recipe, ...action.payload } :
                    recipe

            );
            console.log('editRecipe action.payload', action.payload);
            console.log('editRecipe state.recipeArray', state.recipeArray);

        },
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    }
});



export const recipesFavReducer = recipeListSlice.reducer;

export const { newRecipe, removeRecipe, editRecipe, updateSearchQuery } = recipeListSlice.actions;

export const selectRecipes = (state) => {
    const searchWord = state.recipesFav.searchQuery;
    return state.recipesFav.recipeArray.filter((recipe) => {
        return recipe.title.toLowerCase().includes(searchWord.toLowerCase())
            || recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchWord.toLowerCase()))
    });
};









