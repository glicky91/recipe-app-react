//If have time add form validation

import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { newRecipe } from './recipeListSlice';

export default function AddRecipePage() {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values in JSON:', JSON.stringify(values));
        console.log('form values:', values);
        const recipe = {
            id: uuid(),
            title: values.title,
            catagory: values.commentText,
            date: new Date(Date.now()).toISOString(),
            ingredients: values.ingredients.split(" "),
            actions: values.actions.split(", ")
        };



        dispatch(newRecipe(recipe));
        resetForm();
    };
    return (
        <>
            <h2 className="text-center headerq"> Add Your Recipe</h2>
            <hr />
            <Formik
                initialValues={{
                    title: '',
                    catagory: '',
                    ingredients: [],
                    actions: []
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor="title" md='2'>
                            Recipe Title
                        </Label>
                        <Col md='10'>
                            <Field
                                name='title'
                                placeholder='Title'
                                className='form-control'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="catagory" md='2'>
                            Catagory
                        </Label>
                        <Col md='10'>
                            <Field
                                name='catagory'
                                placeholder='Catagory'
                                className='form-control'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="ingredients" md='2'>
                            Ingredients
                        </Label>
                        <Col md='10'>
                            <Field
                                name='ingredients'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="actions" md='2'>
                            Instructions
                        </Label>
                        <Col md='10'>
                            <Field
                                name='actions'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>

        </>
    )
}

