import React, { useContext } from 'react';
import styles from './index.module.css';
import { SearchWeatherContext } from '../../../shared/context/SearchWeatherProvider';
import { Preloader } from '../../../shared/ui';

export const CarouselItem = (props) => {
    const { isLoading } = useContext(SearchWeatherContext);

    return (
        <div className={`${styles['flat-item']} ${props.classNames.block}`}>

            {
                isLoading
                ? <Preloader/>
                : (
                <>
                    <div className={styles['flat-item__name']}>{props.params.date}</div>
                    <img 
                        className ={styles['flat-item__icon']}
                        src={props.params.icon} 
                        alt={props.params.alt} 
                        title={props.params.alt}/>
                    <div className={`row  ${styles['flat-item__row']}`}>
                        <span className={`${styles['flat-item__txt']} ${styles['flat-item__txt--accent']}`}>{props.params.day.temp}°C</span>
        
                        {
                            props.params.night.temp
                            ? <span className={`${styles['flat-item__txt']}`}>{props.params.night.temp}°C</span>
                            : ''
                        }
                        
                    </div>
                </>)
            }
            
        </div>
    );
};