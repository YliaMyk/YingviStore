import React from 'react';
import styles from './Footer.module.css';
import logo from './res/logo_footer.png';
import vk from './res/VK.png';
import youtube from './res/Youtube_1_.png';
import instagram from './res/instagram.png';
import redit from './res/Vector.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_nav}>
                <img className={styles.footer_nav_img} src={logo} />
                <div className={styles.footer_nav_column}>
                    <h4>Помощь</h4>
                    <a>Оплата и доставка</a>
                    <a>Возврат</a>
                    <a>Таблица размеров</a>
                    <a>Вопросы и ответы</a>
                </div>
                <div className={styles.footer_nav_column}>
                    <h4>Контакты</h4>
                    <a>yingvi@craft.ru</a>
                    <a>@YingviCraft</a>
                    <a>+ 7 800 955 55 35</a>
                    <div className={styles.footer_nav_column_row}>
                        <a><img src={vk}/></a>
                        <a><img src={redit}/></a>
                        <a><img src={instagram}/></a>
                        <a><img src={youtube}/></a>
                    </div>
                </div>
                <div className={styles.footer_nav_column}>
                    <h4>O Yingvi Craft</h4>
                    <a>Отзывы</a>
                    <a>О нас</a>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p>Copyright © Yingvi Craft 2021 Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;