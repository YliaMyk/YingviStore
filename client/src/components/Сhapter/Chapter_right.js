import React from 'react';
import chapterImgRight from './res/chapter_img_right.jpg';
import styles from './Chapter.module.css';

const ChapterRight = () => {
    return (
        <div className={styles.chapter}>
            <img className={styles.chapter_img} src={chapterImgRight} alt=""/>
            <p className={styles.chapter_p_right}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default ChapterRight;