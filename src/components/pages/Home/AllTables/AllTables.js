
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
//import { useSelector } from 'react-redux';




const AllTables = () => {

    //const table = useSelector (state=> getTablebyId(state));
    //const tables = useSelector (state= getAllTables(state));

    return(
        <div>
            <h1>All tables</h1>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>Table 1</h2>
                    </Col>
                    <Col>
                    <p>Status:</p>
                    </Col>
                    <Col className="text-end">
                        <NavLink to="/waiter">
                            <Button variant="primary">Show more</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
};

export default AllTables;
