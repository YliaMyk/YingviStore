import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './App.module.css';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {check} from "./http/useApi";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, 1000)
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
          <Header />
          <main>
              <AppRouter />
          </main>
          <Footer />
        </BrowserRouter>
  );
});

export default App;
