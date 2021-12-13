import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ProductItem from "./ProductItem";
import styles from './ProductList.module.css';

const ProductList = observer(() => {
    const {product} = useContext(Context)

    return (
        <div className={styles.product_list}>
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </div>
    );
});

export default ProductList;