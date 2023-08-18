import React from 'react';
import styles from './index.module.css';

export const Input = ({ children, icon, ...attrs }) => {

    let classInputArr = [];
    let classInputStr = '';

    if (icon) {

        classInputArr.push(styles['field--icon']);

        if (icon.position) {
            classInputArr.push(styles[`field--icon-${icon.position}`]);
        }
        if (icon.name) {
            classInputArr.push(styles[`field--icon-${icon.name}`]);
        }
    }

    if (classInputArr.length) {
        classInputStr = classInputArr.join(' ');
    }

    return (
        <>
            <input
                {...attrs}
                className={`${styles['field']} ${classInputStr}`}
            />
        </>
    );
};