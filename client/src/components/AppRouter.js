import React from 'react';
import {Routes, Route} from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import {useContext} from "react";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import HomePade from "../pages/HomePage/HomePade";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<HomePade/>}/>
        </Routes>
    );
};

export default AppRouter;