import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createMaster, createType} from "../../http/productApi";

const CreateMaster = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addMaster = () => {
        createMaster({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите имя мастера"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addMaster}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMaster;