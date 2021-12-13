import React, {useContext, useEffect} from 'react';
import styles from './Basket.module.css';

import {Context} from "../../index";
import {fetchBasket, fetchProduct, fetchTypes} from "../../http/productApi";
import BaskedItem from "../../components/BaskedItem/BaskedItem";

const Basket = () => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)

    useEffect(() => {
        fetchBasket(2).then(data => product.setBasked(data))
    })


    return (
        <div className={styles.basket}>
            {product.basked.map((basked) =>
                <BaskedItem key={basked.id} productId={basked.productId}/>
            )}
            <button className={styles.basket_button}>Оформить заказ</button>
        </div>
    );
};

export default Basket;