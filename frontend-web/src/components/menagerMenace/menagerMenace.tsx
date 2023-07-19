import Header from "../templates/Header"
import { Col, Row, Tabs, Tab, Container } from "react-bootstrap"
import ListMenaceFromUsers from "../listMenaceFromUsers/menaceFromUsers"
import ListMenaceFromUserFinalized from "../listMenaceFromUserFinalized/menaceFromUsersFinalized"
import axios from "axios"
import { useQuery } from "react-query"

const server = process.env.REACT_APP_LOCAL

const MenagerMenace = () => {

    const {data, isLoading, error, refetch} = useQuery("listMenaceUsers", () => {
        return axios.get(`${server}/menaceUsers`)
                    .then((response) => response.data)
    }, {
        refetchInterval: 3000000
    })

    return (
        // console.log(menaceUsers, "Teste"),
        <div style={{ backgroundColor: "var(--color-page)" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <Header title="Gerenciar ameaças" subtitle="Aqui será possível concluir as ameaças já resolvidas"/>
                </div>
            </div>
            <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                <Row className="ms-0 me-1 ContentTabs">
                    <Tabs mountOnEnter={true} unmountOnExit={true} defaultActiveKey={"openMenace"} id="menagerMenace" style={{ padding: 0, margin: '3vh 0px 0px 0px' }}>
                        <Tab eventKey={"openMenace"} title="Abertas" className="ps-0 ms-0" >
                            <Container fluid>
                                <Row className="mt-5">
                                    <Col>
                                        <div style={{ marginLeft: "15px" }}>
                                            <ListMenaceFromUsers data={data} visibility={isLoading} refetch={refetch}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab  eventKey={"closedMenace"} title="Finalizadas" className="ps-0 ms-0" >
                            <Container fluid>
                                <Row className="mt-5">
                                    <Col>
                                        <div style={{ marginLeft: "15px" }}>
                                            <ListMenaceFromUserFinalized data={data} visibility={isLoading}/>
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

export default MenagerMenace