import React from 'react';
import styles from './index.module.css';

export const Preloader = () => {
    return (
        <div className={styles['lds-ellipsis-wrapper']}>
            <div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
        </div>
    );
};