import {Row, Col, ListGroup} from 'react-bootstrap';
import "./ListHistory.css"
import InformationContext from '../../context/information-context';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useContext } from 'react';
import Loading from '../loading/loading';
import axios from 'axios';
import { useQuery } from 'react-query';

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

const ListHistory = (props: any) => {

    const fetchData = () => {

    }

    return (
        <div>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col className='gridColum'>ID</Col>
                        <Col className='gridColum'>Título</Col>
                        <Col className='gridColum'>Descrição</Col>
                        <Col className='gridColum'>Risco</Col>
                        <Col className='gridColum'>Categoria</Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <InfiniteScroll
                dataLength={props.data.data == undefined ? <></> : props.data.data.length}
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
                            props.data.data !== undefined ?
                                props.data.data.map((item: Menace) => {
                                    if(item.deleted_at !== null) {
                                        return(
                                            <ListGroup.Item key={item.id}>
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
        </div>

    )
}

export default ListHistory