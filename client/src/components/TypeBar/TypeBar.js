import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import {fetchTypes} from "../../http/productApi";

const TypeBar = observer( () => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes( 1).then(data => product.setTypes(data))
    }, [product.types])

    return (
        <ListGroup>
            {product.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active = {type.id === product.selectedType.id}
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;