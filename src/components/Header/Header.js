import React from 'react'
import './Header.css'
import Logo from './Logo/Logo';

function Header(props) {
    const {headerClass, children} = props

    return (
        <header className={`header ${headerClass}`}>
            <Logo></Logo>
            {children}
        </header>)
};

export default Header;