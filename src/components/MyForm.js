import React, {useCallback} from 'react'
import {Formik} from 'formik'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup'

const ProfileSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    telephone: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required")
})

const MyForm = () => {
    // const handleValidate = useCallback(values => {
    //     let errors = {}
    //     if (!values.email) {
    //         errors.email = "Required"
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //         errors.email = "Invalid email address"
    //     }
    //     if (!values.fullname) {
    //         errors.fullname = "Required"
    //     }
    //     if (!values.telephone) {
    //         errors.telephone = "Required"
    //     }
    //     return errors
    // }, [])

    const handleSubmit = useCallback((values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm()
        }, 1000)
    }, [])

    return (
        <Container fluid style={{maxWidth: "700px"}}>
            <h1>Profile Form</h1>
            <Formik
                initialValues={{fullname: "", email: "", telephone: ""}}
                // validate={handleValidate}
                validationSchema={ProfileSchema}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formHorizontalFullname">
                            <Form.Label column sm={2} style={{textAlign: "left"}}>Full Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="fullname"
                                    name="fullname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullname}
                                    placeholder="Enter your full name..."
                                />
                                <Form.Text style={{textAlign: "left", color: "red"}}>
                                    {errors.fullname && touched.fullname && errors.fullname}
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2} style={{textAlign: "left"}}>Email</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter your email..."
                                />
                                <Form.Text style={{textAlign: "left", color: "red"}}>
                                    {errors.email && touched.email && errors.email}
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalTelephone">
                            <Form.Label column sm={2} style={{textAlign: "left"}}>Telephone</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="telephone"
                                    name="telephone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telephone}
                                    placeholder="Enter your telephone..."
                                />
                                <Form.Text style={{textAlign: "left", color: "red"}}>
                                    {errors.telephone && touched.telephone && errors.telephone}
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalSubmit">
                            <Col sm={2}></Col>
                            <Col sm={10} style={{textAlign: "left"}}>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting" : "Submit"}
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default MyForm