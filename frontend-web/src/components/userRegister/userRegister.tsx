import { Modal, Container, Form, Row, Col, Button } from "react-bootstrap"
import { Formik } from "formik"

const UserRegister = (props: any) => {
    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>Cadastrar novo usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Formik
                        initialValues={{ name: "", email: "", password: "" }}
                        validate={values => {

                        }}
                        onSubmit={async () => {

                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            isSubmitting,
                        }) => (
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8rem", fontFamily: "Montserrat" }}>Nome</Form.Label>
                                        <Form.Control
                                            placeholder="Informe o nome do usuário"
                                            aria-label="Informe o nome do usuário"
                                            type="text"
                                            id="name"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8rem", fontFamily: "Montserrat" }}>E-mail</Form.Label>
                                        <Form.Control
                                            placeholder="Informe o e-mail do usuário"
                                            aria-label="Informe o e-mail do usuário"
                                            type="email"
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8rem", fontFamily: "Montserrat" }}>Senha</Form.Label>
                                        <Form.Control
                                            placeholder="Informe a senha"
                                            aria-label="Informe a senha"
                                            type="password"
                                            id="password"
                                            name="passowrd"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </Form.Group>
                                </Row>
                                <Col>
                                    <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8rem" }} type="submit">Salvar</Button>
                                </Col>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default UserRegister