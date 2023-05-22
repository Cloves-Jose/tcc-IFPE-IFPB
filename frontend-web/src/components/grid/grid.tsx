import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { faEllipsisV  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormEdit from '../formEdit/FormEdit';
import DeleteModal from '../deleteModal/deleteModal';
import "./Grid.css"
import axios from 'axios';


const server = process.env.REACT_APP_LOCAL;

export type Menace = {
  id: string,
  name: string,
  created_at: string,
  updated_at: string,
  deleted_at: string,
  description: string,
  dangerousness: string,
  neighborhood: string,
  street: string
}

const Grid = () => {

  const [data, setData] = useState<Menace[]>([]);
  const [show, setShow] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [idMenace, setIdMenace] = useState(null)
  const [menaceInfo, setMenaceInfo] = useState<Menace>();

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCloseDeleteModal = () => setDeleteModal(false)
  const handleShowDeleteModal = () => setDeleteModal(true)

  const displayRow = (item: any) => {
    let menace: Menace[] = []

    if (item !== null)
      item.map((item: Menace) => {
        if(item.deleted_at === null) {
          menace.push(item)
        }
      })
    setData(menace)
  }

  const fetchData = () => {

  }

  useEffect(() => {
    const dataTable = async () => {
      await axios.get(`${server}/getMenace`)
      .then((res) => {
        displayRow(res.data)
      })
      .catch((e) => {
        console.error(e)
      })
    }
    dataTable()
  }, [])
  
  const popover = () => {
    return (
      <Popover style={{ zIndex: '500', backgroundColor: "var(--color-grey)", border: 'none', color: '#40484E', fontFamily: 'Montserrat', fontSize: '0.8em' }}>
        <Popover.Body style={{ padding: "0px" }}>
          <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }} onClick={handleShow}>Editar informações</Button>
            <hr style={{ margin: "0px" }} />
            {/* <div style={{ backgroundColor: '#707070', opacity: '0.5', height: '0.1vh', width: '100%' }}></div> */}
          <Button className="m-2" style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: 'inherit' }} onClick={handleShowDeleteModal}>Deletar ameaça</Button>
        </Popover.Body>
      </Popover>
    )
  }

  return (
    <>
    <FormEdit show={show} onHide={handleClose} title="Editar ameaça" data={menaceInfo}/>
    <DeleteModal title="Deletar ameaça" body={`Deseja deletar à ameaça ${menaceInfo?.name}?`} show={deleteModal} onHide={handleCloseDeleteModal} confirmationButton="OK" cancelButton="Cancelar"/>
      <Container>
        <Row style={{ backgroundColor: "#FFF", paddingTop: "15px"}}>
          <Col className='gridColum'>ID</Col>
          <Col className='gridColum'>Título</Col>
          <Col className='gridColum'>Descrição</Col>
          <Col className='gridColum'>Risco</Col>
          <Col className='gridColum'>Categoria</Col>
          {/* <Col md="2" className='gridColum'>Rua</Col> */}
          <Col className='gridColum'>Ações</Col>
          <hr />
        </Row>
      </Container>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={<></>}
        height={400}
        className='scroolBar'
        style={{backgroundColor: "#FFF", overflowX:"hidden", overflowY: "auto"}}
      >
        {
          data.map(item => {
            return <>
              <Container>
                <Row>
                  <Col className='gridRow'>
                    #{item.id}
                  </Col>
                  <Col className='gridRow'>
                    {item.name}
                  </Col>
                  <Col className='gridRow'>
                    {item.description}
                  </Col>
                  <Col className='gridRow'>
                    {item.dangerousness}
                  </Col>
                  <Col className='gridRow'>
                    Categoria
                  </Col>
                  {/* <Col md="2" className='gridRow'>
                    {item.street}
                  </Col> */}
                  <Col className='gridRow'>
                    <OverlayTrigger rootClose={true} trigger={['click']} placement="left" overlay={popover()}>
                      <Button id={"button*ID*" + item.id + "button*ID*" + item.name} variant='light' className='nopadding d-flex justify-content-start align-self-center' style={{ marginTop: '', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} onClick={() => setMenaceInfo(item)}>
                        <FontAwesomeIcon icon={faEllipsisV} style={{ color: "#848884" }}/>
                      </Button>
                    </OverlayTrigger>
                  </Col>
                  <hr/>
                </Row>
              </Container>
            </>
          })
        }
      </InfiniteScroll>
    </>
  )
}

export default Grid