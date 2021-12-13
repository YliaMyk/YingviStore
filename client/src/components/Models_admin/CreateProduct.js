import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createProduct, fetchMaster, fetchTypes} from "../../http/productApi";
import {observer} from "mobx-react-lite";

const CreateProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)


    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchMaster().then(data => product.setMasters(data))
    }, [])


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('masterId', product.selectedMaster.id)
        formData.append('typeId', product.selectedType.id)
        createProduct(formData).then(data => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => product.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedMaster.name || "Выберите мастера"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.masters.map(master =>
                                <Dropdown.Item
                                    onClick={() => product.setSelectedMaster(master)}
                                    key={master.id}
                                >
                                    {master.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2 mb-2"
                        placeholder='Введите название продукта'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2 mb-2"
                        placeholder='Введите стоимость'
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-2 mb-2"
                        placeholder='Введите описание'
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        type='file'
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;