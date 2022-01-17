import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import axios from 'axios';
import Swal from 'sweetalert2'
import { Container, Card, Button, Row, Col, Navbar, Nav, Badge } from "react-bootstrap";
function Frontpanel() {
    const [data, setdata] = useState([]);
    const [id, setid] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [subtitle, setsubTile] = useState("");
    const [descrip, setdescrip] = useState("");
    const [keywords, setkeywords] = useState("");
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
                Swal.fire(
                    'Good job!',
                    'Successfully deleted!',
                    'success'
                  ).then(res=>window.location.reload());
            }
        } catch (error) {
            console.error(error);
        }
    }
    function single(id) {
        handleShow();
        const specific = data.filter(res => {
            if (res._id == `${id}`) { return res }
        });
        console.log(specific);
        setid(id);
        setTitle(specific[0].title);
        setUrl(specific[0].imageUrl);
        setsubTile(specific[0].subtitle);
        setdescrip(specific[0].description);
        setkeywords(specific[0].keywords);
    }
    const updat = async () => {
        try {
            const response = await axios.put('http://localhost:8080/updateDetails/' + id, {
                "title": title,
                "imageUrl": url,
                "subtitle": subtitle,
                "description": descrip,
                "keywords": keywords
            });
            if (response) {
                setid("");
                setTitle("");
                setUrl("");
                setsubTile("");
                setdescrip("");
                setkeywords("");
                handleClose();
                Swal.fire(
                    'Good job!',
                    'Successfully updated!',
                    'success'
                  ).then(res=>window.location.reload());
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
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
                                value={title}
                                onChange={(e) => { setTitle(e.target.value); }}
                            />
                            <label htmlFor="floatingInputCustom">Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={url}
                                onChange={(e) => { setUrl(e.target.value); }}
                            />
                            <label htmlFor="floatingInputCustom">ImageUrl</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={subtitle}
                                onChange={(e) => { setsubTile(e.target.value); }}
                            />
                            <label htmlFor="floatingInputCustom">Sub-Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={descrip}
                                onChange={(e) => { setdescrip(e.target.value); }}
                            />
                            <label htmlFor="floatingInputCustom">Description</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={keywords}
                                onChange={(e) => { setkeywords(e.target.value); }}
                            />
                            <label htmlFor="floatingInputCustom">Keywords-separate by blankspace</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updat}>update Task</Button>
                </Modal.Footer>
            </Modal>
            <div className="container" style={{ display: "flex" }}>
                <div className="row" id="rows">
                    {data.map((res) =>
                        <Card style={{ width: '25rem', margin: "10px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} id={res._id}>
                            <Card.Body>
                                <Button variant="primary" style={{ marginRight: "10px" }} onClick={() => dels(res._id)}><i className="fas fa-trash"></i></Button><Button variant="primary" onClick={() => single(res._id)} id="buttons"><i className="fas fa-pencil-alt"></i></Button>
                                <Card.Title>{res.title}</Card.Title>
                                <div style={{ width: "100%", padding: "0px", height: "250px" }}>
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
