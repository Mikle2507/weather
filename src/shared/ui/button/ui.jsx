import React from 'react';
import styles from './index.module.css';

export const Button = ({className='', children='', ...attrs}) => {
    return (
        <button className={`${styles.btn} ${className}`} {...attrs}>{children}</button>
    );
};