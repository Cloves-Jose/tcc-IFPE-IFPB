import { ListGroup, Row, Col, OverlayTrigger, Tooltip, Button, Popover } from "react-bootstrap"
import "./MenaceFromUsers.css"
import InfiniteScroll from "react-infinite-scroll-component"
import Loading from "../loading/loading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV  } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios"
import { useState } from "react"
import DeleteModal from "../deleteModal/deleteModal"
import { useMutation } from "react-query"
import axios from "axios"

const server = process.env.REACT_APP_LOCAL

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

const ListMenaceFromUsers = (props: any) => {

    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    const [menaceInfo, setMenaceInfo] = useState<MenaceFromUsers>()
    const [deleteModal, setDeleteModal] = useState(false)

    const handleCloseDeleteModal = () => setDeleteModal(false)
    const handleShowDeleteModal = () => setDeleteModal(true)

    const fetchData = () => {
        
    }

    const deleteMenaceUser = useMutation({
        mutationFn: (id: any) => {
            return axios.delete(`${server}/deleteMenaceUser/${id}`)
                        .then(() => handleCloseDeleteModal())
        },
        onSuccess: (data) => {
            props.refetch()
        },
        onError: (error: any) => {
            console.error(error)
        }
    })

    const popover = () => {
        return (
          <Popover style={{zIndex: '500', backgroundColor: "var(--color-grey)", border: 'none', color: '#40484E', fontFamily: 'Montserrat', fontSize: '0.8em' }}>
            <Popover.Body style={{ padding: "0px" }}>
              <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }} onClick={handleShowDeleteModal}>Finalizar ameaça</Button>
                <hr style={{ margin: "0px" }} />
              <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }}>Deletar ameaça</Button>
            </Popover.Body>
          </Popover>
        )
      }

    return ( 
        <>  
            {console.log(props.data)}
            <DeleteModal title="Finalizar ameaça" body={`Deseja finalizar a ameaça ${menaceInfo?.properties?.title}?`} show={deleteModal} onHide={handleCloseDeleteModal} confirmationButton="OK" cancelButton="Cancelar" onClickConfirmation={() => deleteMenaceUser.mutate(menaceInfo?.properties?.id)} onClickCancel={handleCloseDeleteModal}/>
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col className='gridColum'>ID</Col>
                            <Col className='gridColum'>Título</Col>
                            <Col className='gridColum'>Descrição</Col>
                            <Col className='gridColum'>Local</Col>
                            <Col className='gridColum'>Status</Col>
                            <Col className='gridColum'>Ações</Col>
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
                    <ListGroup variant='flush'>
                        {
                        props.data !== undefined ? 
                            props.data.map((item: MenaceFromUsers) => {
                                if(item.date.deleted_at === null) {
                                return (
                                    // console.log(result, "Foi"),
                                    <ListGroup.Item key={item.properties.id}>
                                        <Row>
                                            <Col className='gridRow'>
                                                #{item.properties.id}
                                            </Col>
                                            <Col className='gridRow'>
                                                {item.properties.title}
                                            </Col>
                                            <Col className='gridRow'>
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
                                            </Col>
                                            <Col className='gridRow'>
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
                                            <Col className='gridRow'>
                                                {item.date.deleted_at === null ?
                                                    <div style={{ backgroundColor: "var(--color-blue)", color:"var(--color-grey)", paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px",borderRadius: "3px", fontWeight: "bolder" }}>
                                                        Aberta
                                                    </div>
                                                : 
                                                    <></>
                                                }
                                            </Col>
                                            <Col className='gridRow'>
                                                <OverlayTrigger rootClose={true} trigger={['click']} placement="left" overlay={popover()}>
                                                    <Button variant='light' className='nopadding d-flex justify-content-start align-self-center' style={{ marginTop: '', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} onClick={() => setMenaceInfo(item)}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color: "#848884" }}/>
                                                    </Button>
                                                </OverlayTrigger>
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

export default ListMenaceFromUsers