import React from 'react';
import Sale from "../../components/Sale/Sale";
import Product from "../Product/Product";
import ProductRow from "../../components/ProductList/ProductRow";
import ChapterRight from "../../components/Сhapter/Chapter_right";
import ChapterLeft from "../../components/Сhapter/Chapter_left";
import styles from './HomePage.module.css';
import Reviews from "../../components/Reviews/Reviews";

const HomePade = () => {
    return (
        <div className={styles.homepage}>
            <Sale/>
            <h2 className={styles.homepage_h2}>Новинки</h2>
            <ProductRow/>
            <h2 className={styles.homepage_h2}>Новые статьи</h2>
            <ChapterRight/>
            <ChapterLeft/>
            <h2 className={styles.homepage_h2}>Отзывы покупателей #IngviCraft</h2>
            <Reviews/>
        </div>
    );
};

export default HomePade;