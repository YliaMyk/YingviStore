import React from 'react';
import chapterImgLeft from './res/chapter_img.jpg';
import styles from "./Chapter.module.css";

const ChapterLeft = () => {
    return (
        <div className={styles.chapter}>
            <p className={styles.chapter_p_left}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.chapter_img}>
                <img className={styles.chapter_img} src={chapterImgLeft} alt=""/>
            </div>
        </div>
    );
};

export default ChapterLeft;