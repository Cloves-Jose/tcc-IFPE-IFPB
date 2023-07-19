import { Col, ListGroup, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import InfiniteScroll from "react-infinite-scroll-component"
import "./MenaceFromUsersFinalized.css"
import Loading from "../loading/loading"
import { formatDate } from "../../helpers/DateHour"

interface MenaceFromUsers {
    properties: {
        id: string,
        title: string,
        description: string,
        location: string
    },
    date: {
        created_at: string,
        updated_at: string,
        deleted_at: string
    },
    geometry: {
        coordinates: {
            latitude: string,
            longitude: string
        }
    }
}

const ListMenaceFromUserFinalized = (props: any) => {
    
    const fetchData = () => {

    }
    
    return (
        <>
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col className='gridColum'>ID</Col>
                            <Col className='gridColum'>Título</Col>
                            <Col className='gridColum'>Descrição</Col>
                            <Col className='gridColum'>Local</Col>
                            <Col className='gridColum'>Data de finalização</Col>
                            <Col className='gridColum'>Status</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <InfiniteScroll
                dataLength={props.data == undefined ? <></> : props.data.length}
                next={fetchData}
                hasMore={true}
                loader={<h4></h4>}
                height={300}
                className='scroolBar'
                style={{backgroundColor: "#FFF", overflowX:"hidden", overflowY: "auto"}}
            >
                {
                    <ListGroup variant="flush">
                        {
                            props.data !== undefined ? 
                                props.data.map((item: MenaceFromUsers) => {

                                    let deleted_at = formatDate(item.date.deleted_at, "pt-BR")

                                    if(item.date.deleted_at !== null) {
                                        return (
                                            <ListGroup.Item key={item.properties.id}>
                                                <Row>
                                                    <Col className="gridRow">
                                                        #{item.properties.id}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        {item.properties.title}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id='tooltip' style={{ backgroundColor: "transparent" }}>
                                                                {item.properties.description}
                                                            </Tooltip>
                                                            }
                                                        >
                                                            <span className='gridRow' style={{ fontSize: "1em" }}>{item.properties.description}</span>
                                                        </OverlayTrigger>
                                                        {/* {item.properties.description} */}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id='tooltip' style={{ backgroundColor: "transparent" }}>
                                                                {item.properties.location}
                                                            </Tooltip>
                                                            }
                                                        >
                                                        <span className='gridRow' style={{ fontSize: "1em" }}>{item.properties.location}</span>
                                                        </OverlayTrigger>
                                                    </Col>
                                                    <Col className="gridRow">
                                                        {deleted_at}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        {item.date.deleted_at !== null ? 
                                                            <div style={{ backgroundColor: "#FFBF00", color:"var(--color-grey)", paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px",borderRadius: "3px", fontWeight: "bolder" }}>
                                                                Finalizada
                                                            </div>
                                                            
                                                        : <></>}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    }
                                })
                            : 
                                <Loading visibility={props.visibility}/>
                        }
                    </ListGroup>
                }
            </InfiniteScroll>
        </>
    )
}

export default ListMenaceFromUserFinalized