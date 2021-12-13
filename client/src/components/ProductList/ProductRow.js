import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";
import styles from './ProductList.module.css'
import {fetchOneProduct, fetchProduct} from "../../http/productApi";

const ProductList = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchProduct(null, null, 1, 4).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    return (
        <div className={styles.product_row}>
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </div>
    );
});

export default ProductList;