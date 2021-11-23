import { useEffect, useState } from "react";
import { Modal,Form } from "react-bootstrap";
import axios from 'axios';
import { Container, Card, Button, Row, Col, Navbar, Nav, Badge } from "react-bootstrap";
function Frontpanel() {
    const [data, setdata] = useState([]);
    const [id, setid] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:8080/getDetails');
            setdata(response.data.message);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }, [1]);
    async function dels(id) {
        try {
            console.log(typeof (id));
            const response = await axios.delete('http://localhost:8080/deleteDetails/' + id);
            if (response) {
                //window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }
    async function update(id) {
        console.log(id, data);
        const specific = data.filter(res => {
            if (res._id == `${id}`) { return res }
        });
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">ImageUrl</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Sub-Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Description</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Keywords-separate by blankspace</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >Add Task</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div>
            <div className="container" style={{display: "flex" }}>
                <div className="row" id="rows">
                    {data.map((res) =>
                        <Card style={{ width: '25rem', margin: "10px" }} id={res._id}>
                            <Card.Body>
                                <Button variant="primary" style={{ marginRight: "10px" }} onClick={() => dels(res._id)}><i className="fas fa-trash"></i></Button><Button variant="primary" onClick={() => update(res._id)} name={res._id}><i className="fas fa-pencil-alt"></i></Button>
                                <Card.Title>{res.title}</Card.Title>
                                <div style={{width: "100%", padding: "0px", height: "250px" }}>
                                    <Card.Img variant="top" src={res.imageUrl} style={{ height: "100%" }} />
                                </div>
                                <Card.Text>{res.subtitle}</Card.Text>
                                <Card.Text>{res.description}</Card.Text>
                                <Badge bg="primary">{res.keywords}</Badge>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>

        </div>
    );
};
export default Frontpanel;
