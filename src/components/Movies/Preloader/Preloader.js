import React from 'react'
import './Preloader.css'

function Preloader() {
    return (
        <section className="preloader">
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span className="preloader__dot"></span>
                    <span className="preloader__dot"></span>
                    <span className="preloader__dot"></span>
                </div>
            </div>
        </section>
    )
};

export default Preloader;