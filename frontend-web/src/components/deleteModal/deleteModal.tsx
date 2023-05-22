import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const DeleteModal = (props: any) => {

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton style={{ padding: "15px", paddingBottom: "5px" }}>
                <Modal.Title style={{ color: "var(--color-blue)", fontWeight: "400", fontFamily: "Montserrat" }}><h5>{props.title}</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "var(--color-gray)", fontWeight: "400", fontFamily: "Montserrat" }}>
                {props.body}
            </Modal.Body>

            <Row>
                <Col>
                    <Row style={{ justifyContent: "space-between", marginLeft: "15px", marginRight: "15px", paddingBottom: "15px"}}>
                        <Button style={{ width: "100px", backgroundColor:"#D3D3D3", fontFamily: "Montserrat", fontSize: "0.8em" }} variant='light'>{props.cancelButton}</Button>
                        <Button style={{ width: "100px", fontFamily: "Montserrat", fontSize: "0.8em" }} variant='primary'>{props.confirmationButton}</Button>
                    </Row>
                </Col>
            </Row>
        </Modal>
    )
}

export default DeleteModal