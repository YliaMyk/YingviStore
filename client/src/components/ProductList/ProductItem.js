import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/consts";

const ProductItem = ({product}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <div style={{width:150, margin:10, cursor:'pointer'}} border={'light'}>
                <img width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                <div>{product.name}</div>
                <div>{product.price} Pуб</div>
            </div>
        </div>
    );
};

export default ProductItem;