import { useState } from "react"
import { useNavigate } from "react-router"
import { Row, Col, Form, Button } from "react-bootstrap"
import { Formik } from "formik"
import BackgroundVideo from "../backgroundVideo/backgroundVideo"

const LoginModal = (props: any) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validated, setValidated] = useState(false)
    const [showFeedbackEmail, setShowFeedbackEmail] = useState(false)
    const [showFeedbackPassword, setShowFeedbackPassword] = useState(false)

    return (
        <>  
            
            <Formik
                enableReinitialize={true}
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors:any = {}

                    setEmail(values.email)
                    setPassword(values.password)

                    if (!values.email) { 
                        errors["email"] = "Preencha este campo corretamente!"
                        setShowFeedbackEmail(true)
                    } else {
                        setShowFeedbackEmail(false)
                    }

                    if (!values.password) {
                        errors["password"] = "Preencha este campo corretamente!"
                        setShowFeedbackPassword(true)
                    } else {
                        setShowFeedbackPassword(false)
                    }

                    return errors
                }}
                onSubmit={async () => {
                    let JsonSend_sector = {
                        "email": email,
                        "password": password
                    }

                    // console.log(JsonSend_sector)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    isSubmitting
                }) => (
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            <Col xs={4} style={{ height: "70vh", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", boxShadow: "var(--shadow)", margin: "0px", padding: "0px", overflow: "hidden" }}>
                                {/* <img src={image_login} alt="Passáro em cima de um mandacaru" style={{ width: "34vw", height: "78vh"  }} /> */}
                                <BackgroundVideo/>
                            </Col>
                            <Col xs={4} style={{ height: "70vh", backgroundColor: "var(--color-grey)", padding: "25px", alignItems: "center", display: "flex", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", boxShadow: "var(--shadow)", justifyContent: "center"  }}>
                                <div>
                                    <div style={{ paddingBottom: "15px" }}>
                                        <p style={{ fontFamily: "Montserrat", fontWeight: "600", margin: "0px" }}>Olá!</p>
                                        <p style={{ fontFamily: "Montserrat", fontWeight: "600", margin: "0px" }}>Bem vindo ao Aquameaça</p>
                                        <p style={{ fontFamily: "Montserrat", fontWeight: "600", margin: "0px" }}><span style={{ color: "var(--color-blue)" }}>Acesse</span> sua conta</p>
                                    </div>

                                    <Row style={{ marginBottom: "15px" }}>
                                        <Form.Group>
                                            <Form.Label style={{ fontSize: "0.8rem", fontFamily: "Montserrat" }}>E-mail</Form.Label>
                                            <Form.Control
                                                id="email"
                                                isInvalid={showFeedbackEmail}
                                                style={{ width: "30vw" }}
                                                placeholder="email@exemplo.com"
                                                aria-label="email@exemplo.com"
                                                type="email"
                                                onChange={handleChange("email")}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <Form.Control.Feedback type="invalid" id="feedbackemail">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row style={{ marginBottom: "20px" }}>
                                        <Form.Group>
                                            <Form.Label style={{ fontSize: "0.8rem", fontFamily: "Montserrat" }}>Senha</Form.Label>
                                                <Form.Control
                                                    id="password"
                                                    isInvalid={showFeedbackPassword}
                                                    style={{ width: "30vw" }}
                                                    placeholder="senha"
                                                    aria-label="senha"
                                                    type="password"
                                                    onChange={handleChange("password")}
                                                    onBlur={handleBlur}
                                                    value={values.password} 
                                                />
                                                <Form.Control.Feedback type="invalid" id="feedbackpassword">{errors.password}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row style={{ alignItems: "center", marginBottom: "20px" }}>
                                        <Col style={{ justifyContent: "flex-start" }}>
                                            <Form.Group>
                                                <Form.Check
                                                    style={{ fontFamily: "Montserrat", fontSize: "0.8em" }}
                                                    inline
                                                    label="Lembrar-me"
                                                    type="checkbox"
                                                    
                                                />

                                            </Form.Group>
                                        </Col>
                                        <Col style={{ display: "flex", justifyContent: "flex-end", paddingRight: "15px", margin: "0px" }}>
                                            <Button style={{ backgroundColor: "transparent", color: "#000", border: "none", margin: "0px", padding: "0px", fontFamily: "Montserrat", fontSize: "0.8em" }}>Esqueci minha senha</Button>
                                        </Col>
                                    </Row>
                                    <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
                                        <Button style={{ fontFamily: "Montserrat", fontSize: "0.8em", width: "30vw" }} type="submit">Entrar</Button>
                                    </Row>
                                    {/* <Row>
                                        <Button style={{ backgroundColor: "transparent", color: "#000", border: "none", margin: "0px", padding: "0px", fontFamily: "Montserrat", fontSize: "0.8em" }} onClick={handleShowUserRegister}>Criar conta</Button>
                                    </Row> */}
                                </div>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LoginModal