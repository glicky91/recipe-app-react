import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllRecipes, updateSearchQuery } from './recipeListSlice';

function SearchBar({ placeholder }) {
    const dispatch = useDispatch();



    return (

        <input
            type='text'
            placeholder={placeholder}
            onChange={(event) => dispatch(updateSearchQuery(event.target.value))}
        />


    );
}

export default SearchBar;