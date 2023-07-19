import { ListGroup, Row, Col} from "react-bootstrap"

import "./ListHistoryCategory.css"
import InfiniteScroll from "react-infinite-scroll-component"
import { formatDate } from "../../helpers/DateHour"
import Loading from "../loading/loading"

export type Category = {
    id: string,
    title: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
}

const ListHistoryCategory = (props: any) => {

    const fetchData = () => {

    }

    return (
        <>
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col className="gridColum">ID</Col>
                            <Col className="gridColum">Título</Col>
                            <Col className="gridColum">Data de atualização</Col>
                            <Col className="gridColum">Data de criação</Col>
                            <Col className="gridColum">Data de deleção</Col>
                        </Row>
                    </ListGroup.Item> 
                </ListGroup>
            </div>
            <InfiniteScroll
                dataLength={props.data.data == undefined ? <></> : props.data.data.length}
                next={fetchData}
                hasMore={true}
                loader={<h4></h4>}
                height={300}
                className="scroolBar"
                style={{backgroundColor: "#FFF", overflowX:"hidden", overflowY: "auto"}}
            >
                {
                    <ListGroup variant="flush">
                        {
                            props.data.data !== undefined ?
                                props.data.data.map((item: Category) => {
                                    
                                    if(item.deleted_at !== null) {
                                        return (
                                            <ListGroup.Item key={item.id}>
                                                <Row>
                                                    <Col className="gridRow">
                                                        #{item.id}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        {item.title}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        { item.updated_at === null ? "--" : formatDate(item.updated_at, "pt-BR")}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        {formatDate(item.created_at, "pt-BR")}
                                                    </Col>
                                                    <Col className="gridRow">
                                                        {formatDate(item.deleted_at, "pt-BR")}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    }
                                })
                            : 
                            <Loading visibility={props.data.isLoading}/>
                        }
                    </ListGroup>
                }
            </InfiniteScroll>
        </>
    )
}

export default ListHistoryCategory