import { useMemo, useState, useEffect, useRef, useCallback, FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { ListGroup } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { faEllipsisV  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormEdit from '../formEditMenace/formEditMenace';
import DeleteModal from '../deleteModal/deleteModal';
import "./ListMenace.css"
import axios from 'axios';


const server = process.env.REACT_APP_LOCAL;

interface Menace {
  id: string,
  title: string,
  description: string,
  category: string,
  dangerousness: string,
  created_at: string,
  updated_at: string,
  deleted_at: string,
}
interface ListMenaceInterface {
  currentMenace: Menace[],
  
  updateListFunction: () => void,
  updateListAfterDelete: () => void,
}


const ListMenace: FC<ListMenaceInterface> = (props) => {

  const [show, setShow] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [menaceInfo, setMenaceInfo] = useState<Menace>();

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCloseDeleteModal = () => setDeleteModal(false)
  const handleShowDeleteModal = () => setDeleteModal(true)

  const fetchData = () => {

  }

  // console.log(props)

  // Deletar ameaça
  const deleteMenace = async (menaceId: any) => {
    await axios.delete(`${server}/deleteMenace/${menaceId}`, {
    })
    .then((res) => {
      handleCloseDeleteModal()
      props.updateListAfterDelete()
    })
    .catch((e) => {
      console.error(e)
    })
  }
  
  const popover = () => {
    return (
      <Popover style={{ zIndex: '500', backgroundColor: "var(--color-grey)", border: 'none', color: '#40484E', fontFamily: 'Montserrat', fontSize: '0.8em' }}>
        <Popover.Body style={{ padding: "0px" }}>
          <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }} onClick={handleShow}>Editar informações</Button>
            <hr style={{ margin: "0px" }} />
          <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }} onClick={handleShowDeleteModal}>Deletar ameaça</Button>
        </Popover.Body>
      </Popover>
    )
  }

  return (
    <>
    <FormEdit show={show} onHide={handleClose} title="Editar ameaça" data={menaceInfo}/>
    <DeleteModal title="Deletar ameaça" body={`Deseja deletar à ameaça ${menaceInfo?.title}?`} show={deleteModal} onHide={handleCloseDeleteModal} confirmationButton="OK" cancelButton="Cancelar" onClickConfirmation={() => deleteMenace(menaceInfo?.id)} onClickCancel={handleCloseDeleteModal}/>
    <div>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col className='gridColum'>ID</Col>
            <Col className='gridColum'>Título</Col>
            <Col className='gridColum'>Descrição</Col>
            <Col className='gridColum'>Risco</Col>
            <Col className='gridColum'>Categoria</Col>
            <Col className='gridColum'>Ações</Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
      <InfiniteScroll
        dataLength={props.currentMenace.length}
        next={props.updateListFunction}
        hasMore={true}
        loader={<h4></h4>}
        height={300}
        className='scroolBar'
        style={{backgroundColor: "#FFF", overflowX:"hidden", overflowY: "auto"}}
      >
        {
          <ListGroup variant='flush'>
            {props.currentMenace.map((item: Menace) => {
              if(item.deleted_at === null) {
                return (
                  <ListGroup.Item>
                    <Row>
                      <Col className='gridRow'>
                        #{item.id}
                      </Col>
                      <Col className='gridRow'>
                        {item.title}
                      </Col>
                      <Col className='gridRow'>
                        {item.description}
                      </Col>
                      <Col className='gridRow'>
                        {item.dangerousness}
                      </Col>
                      <Col className='gridRow'>
                        {item.category}
                      </Col>
                      <Col className='gridRow'>
                      <OverlayTrigger rootClose={true} trigger={['click']} placement="left" overlay={popover()}>
                        <Button id={"button*ID*" + item.id + "button*ID*" + item.title} variant='light' className='nopadding d-flex justify-content-start align-self-center' style={{ marginTop: '', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} onClick={() => setMenaceInfo(item)}>
                           <FontAwesomeIcon icon={faEllipsisV} style={{ color: "#848884" }}/>
                         </Button>
                       </OverlayTrigger>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )
              }
            })
          }
          </ListGroup>
        }
      </InfiniteScroll>
    </>
  )
}

export default ListMenace