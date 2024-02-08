

import { useDispatch, useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tableReducer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';}
import { editTableRequest } from '../../../redux/tableReducer';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Form as ReactForm } from "react-bootstrap";

const SingleTableForm = () => {
    
    const {tableId} = useParams();
    const singleTable = useSelector(state => getTableById(state, parseInt(tableId)));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = singleTable.id;
    const [status, setStatus] = useState(singleTable.status);
    const [maxPeopleAmount, setMaxPeopleAmount]= useState(singleTable.maxPeopleAmount);
    const [peopleAmount, setPeopleAmount]= useState(singleTable.peopleAmount);
    const [bill, setBill]= useState(singleTable.bill);
    
    const validationAndParseData = (value) => {
        const parseValue = parseInt(value, 10)
        return isNaN(parseValue) || parseValue <0 ? 0 : parseValue;
    };

    const handleEditTable= (event) =>{
        event.preventDefault();
        const thisTable = {
            id: parseInt(id),
            status: status,
            peopleAmount: validationAndParseData(peopleAmount),
            maxPeopleAmount: validationAndParseData(maxPeopleAmount),
            bill: validationAndParseData(bill),
        };
        
        if (status !== "Bussy"){
            thisTable.bill = 0;
        };

        if (status === "Free"){
            thisTable.peopleAmount = 0;
            thisTable.maxPeopleAmount = 0;
        };
        dispatch(editTableRequest(thisTable, navigate));
    }

    if (!singleTable) {
        return <div>Loading...</div>; 
    }
    else 
    return(
        <div>
            <h1>Table:{id}</h1>
            <Form>
                <Form.Group>
                    <Row className="mb-3">
                        <Form.Label as='legend' column sm={1}>
                            <strong>Status:{status}</strong>
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Select value= {status} onChange={ event => setStatus(event.target.value)} aria-label="Default select example">
                                <option value="Free">Free</option>
                                <option value="Bussy">Bussy</option>
                                <option value="Reserved">Reserved</option>
                                <option value="Cleaning">Cleaning</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="mb-3">
                        <Form.Label column sm={1}>
                            <strong>People:</strong>
                        </Form.Label>
                        <Col sm={1}>
                            <Form.Control type='number' min='0' max={maxPeopleAmount} value={peopleAmount} placeholder='Table peopleAmount...' onChange={event => setPeopleAmount(event.target.value)} />
                        </Col>
                        <span>/</span>
                        <Col sm={1}>
                            <Form.Control type='number' max="10" value={maxPeopleAmount} placeholder='Table maxPeopleAmount...' onChange={event => setMaxPeopleAmount(event.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className='mb-3'>
                        <Form.Label column sm={1} htmlFor="bill">
                            <strong>Bill:</strong>
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control id="bill" type='number' value={bill} placeholder="Table bill" onChange={event => setBill(event.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className='mb-2'>
                        <Col>
                            <Button type='submit' variant='primary' onClick={event => handleEditTable(event)}>Update</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    )
};


export default SingleTableForm;