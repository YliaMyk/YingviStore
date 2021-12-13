import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import Row from "react-bootstrap/Row";
import ProductList from "../../components/ProductList/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchCategories, fetchMaster, fetchProduct, fetchTypes} from "../../http/productApi";
import styles from './Shop.module.css';
import Pages from "../../components/Pages/Pages";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => product.setCategories(data))
        fetchProduct(null, null, 1, 6).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProduct(product.selectedType.id, product.selectedMaster.id, product.page, 10).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType])

    return (
        <div className={styles.container}>
            <div className={styles.container_typeBar}>
                <TypeBar/>
            </div>
            <div className={styles.container_products}>
                <ProductList></ProductList>
                <Pages/>
            </div>
        </div>
    );
});

export default Shop;