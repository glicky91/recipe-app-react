import { Button, Label, Col, FormGroup, Card, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { editRecipe } from './recipeListSlice';
import { setCurrentTitle, selectCurrentTitle } from './userSlice';


export default function EddRecipe() {
    const [titleModalOpen, setTitleModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleTitleEdit = (values, { resetForm }) => {
        const recipe = {
            //do i need to use useSelector for each of these IF i?
            title: values.title,
        };
        dispatch(editRecipe(recipe.title));
        resetForm();
    };
    return (

        <Modal isOpen={titleModalOpen}>
            <ModalHeader toggle={() => setTitleModalOpen(false)}> Edit Title </ModalHeader>
            <ModalBody>
                <Formik
                    initialValues={{
                        title: this.title,
                    }}
                    onSubmit={handleTitleEdit}                                >
                    <Form>
                        <FormGroup>
                            <Label htmlFor='title'>Title</Label>
                            <Field
                                id='title'
                                name='title'
                                placeholder='Title'
                                className='form-control'
                            />
                        </FormGroup>
                        <Button type='submit' color='primary'>Submit</Button>
                    </Form>
                </Formik>
            </ModalBody>
        </Modal>
    )
}