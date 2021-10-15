import React from 'react'
import './Error404.css'
import {Link} from "react-router-dom";

function Error404() {
    return (
        <>
            <section className="error">
                <div className="error__info">
                    <h2 className="error__name">404</h2>
                    <h3 className="error__description">Страница не найдена</h3>
                </div>
                <Link to="/" className="error__link">Назад</Link>
            </section>
        </>
    )
};

export default Error404;