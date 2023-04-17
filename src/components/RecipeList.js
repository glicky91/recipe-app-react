// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Container, Form, FormGroup, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
// import { TEST_RECIPES } from '../app/shared/RECIPES';
import { selectRecipes } from './recipeListSlice';
import { useDispatch } from "react-redux";
// import { removeRecipe, editRecipe} from './recipeListSlice';
// import { Field, Formik } from 'formik';
// import ActionButton from './ActionButton';
import EditRecipeForm from './EditRecipeForm';


export default function RecipeList() {
    const recipes = useSelector(selectRecipes);
    return (
        <>
            {
                recipes.map((recipe) => (
                    < Col key={recipe.id} md='6' xl='4' >
                        <Card className='mt-2 bg-secondary bg-opacity-25'>
                            <CardHeader className='d-flex justify-content-between align-items-center'>
                                {recipe.title}
                                <EditRecipeForm recipe={recipe} />
                            </CardHeader>
                            <CardBody>
                                <CardSubtitle>Recipe Ingredients:</CardSubtitle>
                                <ul>

                                    {recipe.ingredients.map((ingredient, idx) => (
                                        <li key={idx}>{ingredient}</li>
                                    ))}
                                    {console.log('this is recipe.ingrs ' + recipe.ingredients)}
                                </ul>

                                <CardSubtitle>Recipe Instructions:</CardSubtitle>
                                <ul>
                                    {recipe.actions.map((action, idx) => (
                                        <li key={idx}>{action}</li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }
        </>
    )
}
