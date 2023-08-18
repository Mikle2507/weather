import React, { useState } from 'react';
import styles from './index.module.css';

export const ToggleTheme = () => {
    const theme = localStorage.getItem('app-theme');
    const [active, setActive] = useState(theme);

    const changeTheme = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('body-theme--dark');

        if(active) {
            setActive(false)
            localStorage.removeItem('app-theme');
        } else {
            setActive(true);
            localStorage.setItem('app-theme', 'dark');
        }
    }

    return (
        <button className={`btn-reset ${styles['btn-toggle']} ${active ? styles['active']:''}`} onClick={changeTheme}>Поменять тему
            <span className={styles['btn-toggle__dott']}>
                <svg className={styles['btn-toggle__svg']} viewBox="0 0 13 13">
                    <path d="M10.6067 2.12132C9.83451 1.34916 8.89689 0.8358 7.9126 0.572756C8.44717 2.57528 7.93381 4.79418 6.36403
                    6.36396C4.79425 7.93374 2.57535 8.4471 0.572826 7.91253C0.83587 8.89682 1.34923 9.83444 2.12139 10.6066C4.46333 12.9485
                    8.26473 12.9485 10.6067 10.6066C12.9486 8.26466 12.9486 4.46326 10.6067 2.12132Z"/>
                </svg>
            </span>
        </button>
    );
}