import { useEffect, useState } from "react"
import Header from "../templates/Header"
import ListMenace from "../listMenaces/listMenace"
import ListCategory from "../listCategory/listCategory"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Tabs, Tab } from "react-bootstrap"
import FormRegister from "../formRegisterMenace/formRegisterMenace"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import FormRegisterCategory from "../formRegisterCategory/formRegisterCategory"

const server = process.env.REACT_APP_LOCAL;

const MenaceRegister = () => {
    const [showMenaceRegister, setShowMenaceRegister] = useState(false)
    const [showCategoryRegister, setShowCategoryRegister] = useState(false)
    const [aux, setAux] = useState([])
    const [auxCategory, setAuxCategory] = useState([])
    const [currentMenace, setCurrentMenace] = useState([])
    const [currentCategory, setCurrentCategory] = useState([])
    const [currentLimit, setCurrentLimit] = useState(50)
    const [currentPage, setCurrentPage] = useState(1)
    const [state, setCurrentState] = useState("")
    const [currentParams, setCurrentParams] = useState({})

    const handleCloseMenaceRegister = () => setShowMenaceRegister(false)
    const handleShowMenaceRegister = () => setShowMenaceRegister(true)
    const handleCloseCategoryRegister = () => setShowCategoryRegister(false)
    const handleShowCategoryRegister = () => setShowCategoryRegister(true)

    const getAllToPagination = (params: { limit: number, page: number }) => {
        getAllMenaces(params)
        getAllCategory(params)
    }
    
    const getAllMenaces = async (params: { limit: number; page: number }) => {
    await axios.get(`${server}/getMenace`)
    .then((res) => {
            setAux((state) => {
            let aux = state.concat(res.data)
            setAux(aux);
            setCurrentMenace(aux)
            return state
        })
    }).catch((e) => {
        console.error(e) 
        })
    }

    const getAllCategory = async (params: { limit: number; page: number }) => {
    await axios.get(`${server}/getCategory`)
    .then((res) => {
        setAuxCategory((state) => {
            let aux = state.concat(res.data)
            setAuxCategory(aux)
            setCurrentCategory(aux)
            return state
        })
    }).catch(e => {
        console.error(e)
        })
    }

    const updateListAfterDelete = () => {
        setAux([])
        setCurrentPage(1)

        setCurrentState("deleting");

        if (state === "deleting") {
            setCurrentState("")
        }
    }

    const updateListFunction = () => {
        // setCurrentPage(currentPage + 1)
        setAux((prevState) => {
            if (prevState.length > (49 * currentPage)) {
                setCurrentPage(currentPage + 1)
                return prevState
            } else {
                return prevState
            }
        })
    }

    useEffect(() => {
    setCurrentParams((params) => {
        setCurrentState((state) => {
        getAllToPagination(Object.assign(params, { limit: currentLimit, page: currentPage }))
        return state
        })
        return params
    })
    }, [currentPage, currentLimit])

    return (
        <>
            <FormRegister show={showMenaceRegister} onHide={handleCloseMenaceRegister} title="Cadastrar ameaça"/>
            <FormRegisterCategory show={showCategoryRegister} onHide={handleCloseCategoryRegister} title="Cadastrar categoria"/>
            <div style={{ backgroundColor: "var(--color-page)" }}>        
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <Header title="Ameaças" subtitle="Aqui será possível cadastrar novas ameaças"/>
                    </div>
                </div>
                {/* <hr/> */}
                <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <Row className="ms-0 me-1 ContentTabs">
                        <Tabs mountOnEnter={true} unmountOnExit={true} defaultActiveKey={"menace"} id="menacesTabs" style={{ padding: 0, margin: '3vh 0px 0px 0px' }}>
                            <Tab eventKey={"menace"} title="Ameaça" className="ps-0 ms-0" > 
                                <Container fluid>
                                    <Row className="mt-3">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div style={{ display: "flex", alignItems: "center", marginLeft: "15px" }}>
                                                <h5 style={{ fontWeight: "400", color: "var(--color-blue)", fontFamily: "Montserrat" }}>
                                                    Ameaça
                                                </h5>
                                            </div>
                                            <div style={{ marginLeft: "15px" }}>
                                                <Button variant="light" onClick={handleShowMenaceRegister} style={{ width: "50px", height: "50px" }}>
                                                    <FontAwesomeIcon icon={faPlus} style={{ color: "var(--color-blue)" }} size="xl"/>
                                                </Button>
                                            </div>
                                        </div>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <div style={{ marginLeft: "15px" }}>
                                                <ListMenace currentMenace={aux} updateListAfterDelete={updateListAfterDelete} updateListFunction={updateListFunction}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey={"category"} title="Categoria" className="ps-0 ms-0">
                                <Container fluid>
                                    <Row className="mt-3">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div style={{ display: "flex", alignItems: "center", marginLeft: "15px" }}>
                                                <h5 style={{ fontWeight: "400", color: "var(--color-blue)", fontFamily: "Montserrat" }}>
                                                    Categoria
                                                </h5>
                                            </div>
                                            <div style={{ marginLeft: "15px" }}>
                                                <Button variant="light" onClick={handleShowCategoryRegister} style={{ width: "50px", height: "50px" }}>
                                                    <FontAwesomeIcon icon={faPlus} style={{ color: "var(--color-blue)" }} size="xl"/>
                                                </Button>
                                            </div>
                                        </div>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div style={{ marginLeft: "15px" }}>
                                                <ListCategory currentCategory={auxCategory} updateListAfterDelete={updateListAfterDelete}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Row>
                </div>
            </div>
        </>

    )
}

export default MenaceRegister