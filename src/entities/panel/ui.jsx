import React, { useContext } from 'react';
import styles from './index.module.css';
import { SearchWeatherContext } from '../../shared/context/SearchWeatherProvider';
import { Preloader } from '../../shared/ui';
import { isEmpty } from '../../shared/utils/isEmpty';

export const Panel = () => {
    
    const {isLoading, city} = useContext(SearchWeatherContext);

    return (
        <div className={styles['info-panel']}>
            {
                isLoading
                ? <Preloader/>
                : !isEmpty(city)
                    ?
                    (
                        <>
                            <img 
                                className={styles['info-panel__image']}
                                src={city.icon} alt={city.alt} title={city.alt} />
                            <div className={`txt-black ${styles['info-panel__value']}`}>{city.value}
                                <span className={`txt-medium ${styles['info-panel__value-measure']}`}>&nbsp;°C</span>
                            </div>
                            <div className={`txt-bold ${styles['info-panel__name']}`}>{city.typeName}</div>
                            <div className={`simple-txt clr-txt-secondary ${styles['info-panel__description']}`}>Ощущается как {city.valueFeel} °C</div>
                            <div className={`row ${styles['info-panel__date-row']}`}>
                                <div className="simple-txt clr-txt-secondary">{city.day}</div>
                                <div className="simple-txt clr-txt-secondary">{city.date}</div>
                            </div>
                            <div className={`simple-txt clr-txt-secondary ${styles['info-panel__location']}`}>{city.location}</div>
                        </>
                    )
                    : 'Данные отсутствуют'
            }
            
        </div>
    );
};