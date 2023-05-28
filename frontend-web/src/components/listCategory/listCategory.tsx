import { ListGroup, Col, Row, Popover, OverlayTrigger, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV  } from "@fortawesome/free-solid-svg-icons";
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

    const formatDate = (date: any) => {
        const result = new Date(date).toLocaleDateString('pt-BR')

        return result
    }

    const popover = () => {
        return (
            <Popover style={{ zIndex: '500', backgroundColor: "var(--color-grey)", border: 'none', color: '#40484E', fontFamily: 'Montserrat', fontSize: '0.8em' }}>
                <Popover.Body style={{ padding: "0px" }}>
                    <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }}>Editar informações</Button>
                        <hr style={{ margin: "0px" }} />
                    <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }}>Deletar categoria</Button>
                </Popover.Body>
            </Popover>
        )
    }

    return (
        <>
            {/* {console.log(props.currentCategory)} */}
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col className="gridColum">ID</Col>
                            <Col className="gridColum">Título</Col>
                            <Col className="gridColum">Data de criação</Col>
                            <Col className="gridColum">Data de atualização</Col>
                            <Col className="gridColum">Ações</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <InfiniteScroll
                dataLength={props.currentCategory.length}
                next={fetchData}
                hasMore={true}
                loader={<h4></h4>}
                height={300}
                className="scroolBar"
                style={{backgroundColor: "#FFF", overflowX:"hidden", overflowY: "auto"}}
            >
                {
                    <ListGroup variant="flush">
                        {props.currentCategory.map((item: Category) => {
                            let createDate = formatDate(item.created_at)
                            let updateDate = formatDate(item.updated_at)
                            if(item.deleted_at === null) {
                                return (
                                    <ListGroup.Item key={item.id}>
                                        <Row>
                                            <Col className='gridRow'>
                                                #{item.id}
                                            </Col>
                                            <Col className='gridRow'>
                                                {item.title}
                                            </Col>
                                            <Col className='gridRow'>
                                                {createDate}
                                            </Col>
                                            {
                                                item.updated_at === null ?
                                                <Col className='gridRow'>
                                                    --
                                                </Col> :
                                                <Col className='gridRow'>
                                                    {updateDate}
                                                </Col>
                                            }
                                            <Col className='gridRow'>
                                                <OverlayTrigger rootClose={true} trigger={['click']} placement="left" overlay={popover()}>
                                                    <Button id={"button*ID*" + item.id + "button*ID*" + item.title} variant='light' className='nopadding d-flex justify-content-start align-self-center' style={{ marginTop: '', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}>
                                                    <FontAwesomeIcon icon={faEllipsisV} style={{ color: "#848884" }}/>
                                                    </Button>
                                                </OverlayTrigger>
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