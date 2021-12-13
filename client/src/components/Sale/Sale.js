import React from 'react';
import styles from './Sale.module.css';
import backgroundImg from './res/basground.png'

const Sale = () => {
    return (
        <div className={styles.sale}>
            <h2 className={styles.sale_h2}>Бесплатная консультация</h2>
            <button className={styles.sale_button}>Заказать звонок</button>
        </div>
    );
};

export default Sale;