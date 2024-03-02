import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setUsShow(false);
    }

    const [us_show, setUsShow] = useState(false);
    const handleUsClose = () => setUsShow(false);
    const handleUsShow = () => {
        setUsShow(true)
        setShow(false);
    };

    const [contactData, setContactData] = useState([]);
    const [usContactData, setUsContactData] = useState([]);
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setContactData(data.results))
    }, [])

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/United%20States/')
            .then(res => res.json())
            .then(data => setUsContactData(data.results))
    }, [])

    console.log(usContactData);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button  onClick={handleShow} className="btn btn-lg  btn-outline-primary buttonA" type="button" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning buttonB" type="button" onClick={handleUsShow}>US Contacts</button>
                </div>
                {/* All contacts modal */}
                <>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>All Contacts</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <table className="table table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contactData.map(item => <tr>
                                            <td>{item.id}</td>
                                            <td>{item.country.name}</td>
                                            <td>{item.phone}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-lg btn-outline-primary buttonA" type="button" onClick={handleShow}>All Contacts</button>
                            <button className="btn btn-lg btn-outline-warning buttonB" type="button" onClick={handleUsShow}>US Contacts</button>
                            <Button variant="primary" className='btn-lg btn-outline-primary buttonC' onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* us contacts modal */}
                    <Modal show={us_show} onHide={handleUsClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>US Contacts</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <table className="table table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usContactData.map(item => <tr>
                                            <td>{item.id}</td>
                                            <td>{item.country.name}</td>
                                            <td>{item.phone}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-lg btn-outline-primary buttonA" type="button" onClick={handleShow}>All Contacts</button>
                            <button className="btn btn-lg btn-outline-warning buttonB" type="button" onClick={handleUsShow}>US Contacts</button>
                            <Button variant="primary" className='btn-lg btn-outline-primary buttonC' onClick={handleUsClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        </div>
    );
};

export default Problem2;