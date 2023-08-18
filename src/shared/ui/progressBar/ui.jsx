import React from 'react';
import styles from './index.module.css';

export const ProgressBar = ({value=0}) => {
    return (
        <div className={styles['progress-bar']}>
            <div className={`${styles['progress-bar-txt']} ${styles['progress-bar-row']}`}>
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className={styles['progress-bar-line']}>
                <span className={styles['progress-bar-line-inner']} style={{ width: value+'%'}}>
                </span>
            </div>
            <div className={`${styles['progress-bar-txt']} ${styles['progress-bar-bottom']}`}>%</div>
        </div>
    );
};