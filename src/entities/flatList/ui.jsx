import React from 'react';
import styles from './index.module.css';
import { FlatItem } from './flatItem/ui';

export const FlatList = ({list}) => {
    return (
        <ul className={`list-reset row row--wrap row--18 row--between ${styles['flat-item-big-list']}`}>
            {
                list.map((item, index)=>
                    <li key={index} className={styles['flat-item-big-list']}>
                        <FlatItem params={item}/>
                    </li>
                )
            }                
        </ul>
    );
};