import React from 'react';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>MyShop</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
