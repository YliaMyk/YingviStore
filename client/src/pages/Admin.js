import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/Models_admin/CreateType";
import CreateMaster from "../components/Models_admin/CreateMaster";
import CreateProduct from "../components/Models_admin/CreateProduct";

const Admin = () => {
    const [masterVisible, setMasterVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container className="d-flex flex-column p-2">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMasterVisible(true)}>
                Добавить мастера
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}>
                Добавить продукт
            </Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateMaster show={masterVisible} onHide={() => setMasterVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;