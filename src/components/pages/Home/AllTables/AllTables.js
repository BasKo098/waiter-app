
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";


const AllTables = () => {
    return(
        <div>
            <h1>All tables</h1>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>Table 1</h2>
                    </Col>
                    <Col className="text-end">
                        <Button variant="primary">Show more</Button>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
};

export default AllTables;
