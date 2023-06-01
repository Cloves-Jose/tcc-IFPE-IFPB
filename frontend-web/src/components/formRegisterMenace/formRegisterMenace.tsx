import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import { MultiSelect } from "react-multi-select-component"
import { Formik } from "formik"
import { actualDate } from "../../helpers/DateHour"

import axios from "axios"

const server = process.env.REACT_APP_LOCAL

// const options = [
//     { label: "Grapes 🍇", value: "grapes" },
//     { label: "Mango 🥭", value: "mango" },
//     { label: "Strawberry 🍓", value: "strawberry" },
//   ];
const FormRegister = (props: any) => {

    const date = actualDate()

    let JsonSend_sector = {}

    const [validated, setValidated] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [dangerousness, setDangerousness] = useState("")
    const [risk, setRisk] = useState("")
    const [showFeedbackTitle, setShowFeedbackTitle] = useState(false)
    const [showFeedbackDescription, setShowFeedbackDescription] = useState(false)

    // const [selected, setSelected] = useState([]);

    // const options = {label: props?.dataCategory?.title, value: props?.dataCategory?.value}

    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Formik
                        initialValues={{ title: '', description: '' }}
                        validate={values => {
                            let errors:any = {}
                            setTitle(values.title)
                            setDescription(values.description)

                            if (!values.title) {
                                errors["title"] = 'Preencha este campo corretamente!'
                                setShowFeedbackTitle(true)
                            } else {
                                setShowFeedbackTitle(false)
                            }

                            // if (!values.photo) {
                            //     errors["photo"] = 'Preencha este campo corretamente!'
                            //     setShowFeedback(true)
                            // }

                            if (!values.description) {
                                errors["description"] = 'Preencha este campo corretamente!'
                                setShowFeedbackDescription(true)
                            } else {
                                setShowFeedbackDescription(false)
                            }

                            return errors
                        }}
                        onSubmit={async () => {
                            JsonSend_sector = {
                                "title": title,
                                "photo": "https://img.freepik.com/fotos-gratis/tiro-de-angulo-alto-de-duas-escavadeiras-em-um-canteiro-de-obras_181624-7771.jpg?w=1380&t=st=1675361902~exp=1675362502~hmac=22859b6ce31bdbc02a28630f129f0eb20a7ed927e7754fd1a6b19b299c878e53",
                                "dangerousness": dangerousness,
                                "risk": risk,
                                "category": category,
                                "description": description,
                                "created_at": date
                            }
                            
                            await axios.post(`${server}/register`, JsonSend_sector)
                                .then((res) => {
                                    console.log(res)
                                    props.onHide()
                                    props.refetch()
                                }).catch((e) => {
                                    console.error(e)
                                })
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
                            <Form style={{ justifyContent: "center", padding: "15px" }} noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Título</Form.Label>
                                            <Form.Control
                                                isInvalid={showFeedbackTitle}
                                                placeholder="Informe um título para a ameaça"
                                                arial-label="Informe um título para a ameaça"
                                                // required
                                                type="text"
                                                id="title"
                                                name="title"
                                                autoComplete="title"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                            />
                                            <Form.Control.Feedback type="valid">Preenchido corretamente!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid" id="feedbacktitle">{errors.title}</Form.Control.Feedback>
                                        <div className="form-text" >Este será o título exibido no aplicativo mobile</div>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Image</Form.Label>
                                            <Form.Control
                                                required
                                                type="file"
                                            />
                                            <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                                            <div className="form-text" >Esta será a imagem exibida no aplicativo mobile</div>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Grau de ameaça</Form.Label>
                                                <Form.Select 
                                                    
                                                    onChange={value => setDangerousness(value.target.value)}
                                                >
                                                    <option value="Baixa" >Baixa</option>
                                                    <option value="Médio">Média</option>
                                                    <option value="Alta">Alta</option>
                                                </Form.Select>
                                            <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                            <div className="form-text">Esta informação será de uso interno</div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat", paddingBottom: "10px" }}>Oferece risco de infecção em humanos ou animais?</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Check
                                                        inline
                                                        label="Sim"
                                                        type="radio"
                                                        checked={risk === "1"}
                                                        onClick={() => setRisk("1")}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Check
                                                        inline
                                                        label="Não"
                                                        type="radio"
                                                        checked={risk === "0"}
                                                        onClick={() => setRisk("0")}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="form-text" style={{ paddingTop: "5px"}}>Esta informação será de uso interno</div>
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Categoria da ameaça</Form.Label>
                                        {/* <MultiSelect
                                            options={options}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            
                                        /> */}
                                        <Form.Select
                                            onChange={value => setCategory(value.target.value)}
                                        >
                                            <option value="Baixa" >Baixa</option>
                                            <option value="Médio">Média</option>
                                            <option value="Alta">Alta</option>
                                        </Form.Select> 
                                        <div className="form-text">Esta informação será de uso interno</div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label style={{ fontSize: "0.8em", fontFamily: "Montserrat" }}>Descrição</Form.Label>
                                        <Form.Control
                                            isInvalid={showFeedbackDescription}
                                            placeholder="Informe uma descrição para a ameaça"
                                            aria-label="Inform uma descrição para a ameaça"
                                            as="textarea"
                                            id="description"
                                            name="description"
                                            autoComplete="description"
                                            style={{ maxHeight: "100px", minHeight: "100px", height: "100px" }}
                                            maxLength={200}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                        />
                                        <Form.Control.Feedback>Preenchido corretamente!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Por favor preencha corretamente o campo</Form.Control.Feedback>
                                        <div className="form-text" >Esta será a descrição exibida no aplicativo mobile</div>
                                    </Form.Group>
                                </Row>
                                <Col>
                                    <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} type="submit">Salvar</Button>
                                </Col>
                            </Form>
                        )}

                    </Formik>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default FormRegister