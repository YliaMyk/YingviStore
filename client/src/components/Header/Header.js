import React, {useContext, useState} from 'react';
import styles from './Header.module.css';
import {Context} from "../../index";
import logo from './res/logo.png';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    BLOG_ROUTE,
    HOME_ROUT,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    SHOP_ROUTE
} from "../../utils/consts";


const Header = observer(() => {
    const navigate = useNavigate();

    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <header>
            <div className={styles.container}>
                <a style={{cursor:'pointer'}} onClick={() => navigate(HOME_ROUT)}>
                    <img src={logo} alt=""
                         className={styles.logo}
                    />
                </a>
                {user.isAuth ?
                    <nav className={styles.header_nav}>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(SHOP_ROUTE)}>
                                Каталог</button>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(BLOG_ROUTE)}>
                                Блог</button>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(BASKET_ROUTE)}
                                >Корзина</button>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</button>
                        <button className={styles.header_nav_button}
                                onClick={() => logOut()}>Выйти</button>
                    </nav>
                    :
                    <nav className={styles.header_nav}>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(SHOP_ROUTE)}>
                                Каталог</button>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(BLOG_ROUTE)}>
                                Блог</button>
                        <button className={styles.header_nav_button}
                                onClick={() => navigate(LOGIN_ROUTE)}>
                            Войти</button>
                    </nav>
                }
            </div>
        </header>
    );
})


export default Header;