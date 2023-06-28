import Header from "../templates/Header"
import ListHistory from "../listHistoryMenace/listHistory"
import ListHistoryCategory from "../listHistoryCategory/listHistoryCategory";
import {Row, Col, Button, ListGroup, Popover, OverlayTrigger, Tooltip, Container, Tab, Tabs} from 'react-bootstrap';
import axios from "axios";
import { useQuery } from "react-query";

const server = process.env.REACT_APP_LOCAL;


const MenaceHistory = () => {

    const getListMenaceHistory = () => {
        const data = axios.get(`${server}/getMenace`)
                        .then((response) => {
                            return response.data
                        })
        return data
    }

    const getListCategoryHistory = () => {
        const data = axios.get(`${server}/getCategory`)
                        .then((response) => {
                            return response.data
                        })
        return data
    }

    const menace = useQuery("listMenaceHistory", getListMenaceHistory)
    const category = useQuery("listCategoryHistory", getListCategoryHistory)

    return (
        <div style={{ backgroundColor: "var(--color-page" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <Header title="Histórico" subtitle="Aqui será possível observar todas as ameaças e categorias deletadas"/>
                </div>
            </div>
            <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                    <Row className="ms-0 me-1 ContentTabs">
                        <Tabs mountOnEnter={true} unmountOnExit={true} defaultActiveKey={"menace"} id="menacesTabs" style={{ padding: 0, margin: '3vh 0px 0px 0px' }}>
                            <Tab eventKey={"menace"} title="Ameaça" className="ps-0 ms-0" > 
                                <Container fluid>
                                    <Row className="mt-5">
                                        <Col>
                                            <div style={{ marginLeft: "15px" }}>
                                                <ListHistory data={menace}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey={"category"} title="Categoria" className="ps-0 ms-0">
                                <Container fluid>
                                    <Row className="mt-5">
                                        <Col>
                                            <div style={{ marginLeft: "15px" }}>
                                                <ListHistoryCategory data={category}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Row>
                </div>
        </div>
    )
}

export default MenaceHistory