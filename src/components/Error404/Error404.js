import React from 'react'
import './Error404.css'
import {useHistory} from "react-router-dom";

function Error404() {
    const history = useHistory()

    return (
        <>
            <section className="error">
                <div className="error__info">
                    <h2 className="error__name">404</h2>
                    <h3 className="error__description">Страница не найдена</h3>
                </div>
                <span className="error__link" onClick={history.goBack}>Назад</span>
            </section>
        </>
    )
};

export default Error404;