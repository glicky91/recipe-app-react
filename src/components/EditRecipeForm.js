import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Label } from 'reactstrap';
import { editRecipe, removeRecipe } from "./recipeListSlice";
import ActionButton from "./ActionButton";

const EditRecipeForm = ({ recipe }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const updatedRecipe = {
            id: recipe.id,
            title: values.title,
            catagory: values.catagory,
            ingredients: values.ingredients.split(","),
            actions: values.actions.split(", "),
            date: new Date(Date.now()).toISOString()
        }
        console.log(updatedRecipe);

        dispatch(editRecipe(updatedRecipe));
        setModalOpen(false);
    };
    return (
        <>
            <ActionButton onEdit={() => setModalOpen(true)} onDelete={() => dispatch(removeRecipe(recipe.id))} />
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Edit Recipe
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            title: recipe.title,
                            catagory: recipe.catagory,
                            ingredients: recipe.ingredients.join(","),
                            actions: recipe.actions.join(", ")
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="title">
                                    Recipe Title
                                </Label>
                                <Field
                                    name='title'
                                    placeholder='New Title'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="catagory">
                                    Catagory
                                </Label>
                                <Field
                                    name='catagory'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="ingredients">
                                    Ingredients
                                </Label>
                                <Field
                                    name='ingredients'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="actions">
                                    Instructions
                                </Label>
                                <Field
                                    name='actions'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>

        </>
    )
}

export default EditRecipeForm;