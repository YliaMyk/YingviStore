import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../http/productApi";
import styles from './Product.module.css';

const Product = () => {
    const [product, setProducts] = useState({info: []})

    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProducts(data))
    }, [])

    return (
        <div className={styles.product}>
            <img className={styles.product_img} src={process.env.REACT_APP_API_URL + product.img}/>
            <div className={styles.product_description}>
                <h3 className={styles.product_description_name}>{product.name}</h3>
                <p className={styles.product_description_p}>{product.description}</p>
                <p className={styles.product_description_price}>{product.price}  Pуб.</p>
                <button className={styles.product_description_button}>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default Product;