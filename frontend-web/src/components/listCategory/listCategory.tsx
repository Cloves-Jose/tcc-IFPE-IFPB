import { ListGroup, Col, Row, Popover } from "react-bootstrap"
import InfiniteScroll from "react-infinite-scroll-component"
import "./ListCategory.css"

export type Category = {
    id: string,
    title: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
}

const ListCategory = (props: any) => {
    
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
                            <Col className="gridColum">Data de criação</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <InfiniteScroll
                dataLength={props.currentCategory.length}
                next={fetchData}
                hasMore={true}
                loader={<h4></h4>}
                height={400}
                className="scroolBar"
                style={{backgroundColor: "#FFF", overflowX:"hidden", overflowY: "auto"}}
            >
                {
                    <ListGroup variant="flush">
                        {props.currentCategory.map((item: Category) => {
                            if(item.deleted_at === null) {
                                return (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                #{item.id}
                                            </Col>
                                            <Col>
                                                {item.title}
                                            </Col>
                                            <Col>
                                                {item.created_at}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            }
                        })}
                    </ListGroup>
                }
            </InfiniteScroll>
        </>
    )
}

export default ListCategory