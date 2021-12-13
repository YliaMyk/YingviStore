import React, {useContext, useEffect, useState} from 'react';
import {PRODUCT_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import close from './res/clear.png';
import {fetchOneProduct} from "../../http/productApi";
import styles from './BascedItem.module.css';

const BaskedItem = (productId) => {
    const navigate = useNavigate();
    const [product, setProducts] = useState({info: []})

    useEffect(() => {
        fetchOneProduct(productId.productId).then(data => setProducts(data))
    }, [])


    return (
        <div className={styles.basked_items} onClick={() => navigate(PRODUCT_ROUTE + '/' + productId.productId)}>
            <img width={100}  src={process.env.REACT_APP_API_URL + product.img}/>
            <div className={styles.basked_items_name}>{product.name}</div>
            <div className={styles.basked_items_price}>{product.price} Pуб</div>
            <button className={styles.basked_items_button}><img src={close}/></button>
        </div>
    );
};

export default BaskedItem;