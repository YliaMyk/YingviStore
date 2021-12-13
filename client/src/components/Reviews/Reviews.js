import React from 'react';
import styles from './Reviews.module.css';
import reviewsImg1 from './res/reviews_1.jpg';
import reviewsImg2 from './res/reviews_2.jpg';
import reviewsImg3 from './res/reviews_3.jpg';
import reviewsImg4 from './res/reviews_5.jpg';



const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <a className={styles.reviews_a}
                href="https://www.instagram.com/yingvi_craft/">
                <img className={styles.reviews_img} src={reviewsImg1}/>
            </a>
            <a className={styles.reviews_a}
               href="https://www.instagram.com/yingvi_craft/">
                <img className={styles.reviews_img} src={reviewsImg2}/>
            </a>
            <a className={styles.reviews_a}
               href="https://www.instagram.com/yingvi_craft/">
                <img className={styles.reviews_img} src={reviewsImg3}/>
            </a>
            <a className={styles.reviews_a}
               href="https://www.instagram.com/yingvi_craft/">
                <img className={styles.reviews_img} src={reviewsImg4}/>
            </a>
        </div>
    );
};

export default Reviews;