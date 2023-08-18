import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.css';
import { useCity } from '../../../../../shared/hooks/useCity';

export const AsideSlideList = ({list, handleClick}) => {

    const [query, setQuery] = useState('');
    const {fetchCity, isLoadingCity} = useCity(query);

    const onClick = async (e) => {
        e.preventDefault();    
        setQuery(e.target.dataset.name);
        handleClick();
    }
    useEffect(()=>{
        if (!isLoadingCity) {
            fetchCity();
        }
    }, [query]);
    
    return (
        <ul className={`list-reset ${styles['list']}`}>
            {list.map((item, index)=>
                <li key={index}><button data-name={item.cityName} onClick={onClick} className={`btn-reset ${styles['btn']}`}>{item.query}
                    <svg className={styles['btn-svg']} xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15">
                    <path d="M2.09312 0L0 1.7625L6.79892 7.5L0 13.2375L2.09312 15L11 7.5L2.09312 0Z"/>
                    </svg>
                </button></li>
            )}
        </ul>
    );
};