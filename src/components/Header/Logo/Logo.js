import React from 'react'
import logo from '../../../images/logo.svg'
import './Logo.css'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to="/">
            <img src={logo} alt="" className="logo"/>
        </Link>
    )
};

export default Logo;