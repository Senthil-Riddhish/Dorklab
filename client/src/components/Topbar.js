import { Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
function Topbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[title,setTitle]=useState("");
    const[url,setUrl]=useState("");
    const[subtitle,setsubTile]=useState("");
    const[descrip,setdescrip]=useState("");
    const[keywords,setkeywords]=useState("");
    function addTask(){
        let arr=keywords.split(' ');
        const addjson={
            "title":title,
            "imageUrl":url,
            "subtitle":subtitle,
            "description":descrip,
            "keywords":arr
        };
        const add=async()=>{
            try {
                const response = await axios.post('http://localhost:8080/addDetails',addjson);
                console.log(response);
                setShow(false);
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
        };
        add();
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
                                onChange={(e)=>setTitle(e.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={url}
                                onChange={(e)=>setUrl(e.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">ImageUrl</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={subtitle}
                                onChange={(e)=>setsubTile(e.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">Sub-Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={descrip}
                                onChange={(e)=>setdescrip(e.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">Description</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="name@example.com"
                                value={keywords}
                                onChange={(e)=>setkeywords(e.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">Keywords-separate by blankspace</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addTask}>Add Task</Button>
                </Modal.Footer>
            </Modal>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="primary" onClick={handleShow}>
                                Add Task
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Topbar;