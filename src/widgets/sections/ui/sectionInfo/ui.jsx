import React, { useContext, useEffect, useState } from 'react';
import styles from '../index.module.css';
import { FlatList } from '../../../../entities/flatList/ui';
import { SearchWeatherContext } from '../../../../shared/context/SearchWeatherProvider';
import { getDirectionByDeg } from '../../../../shared/utils/deg';

const SectionFlatList = () => {

    const [info, setInfo] = useState([]);
    const {city} = useContext(SearchWeatherContext);
    
    useEffect(()=>{
        setInfo([
            {
                name: 'Скорость ветра',
                value: city.wind,
                measure: 'м/с',
                windDirectionName: getDirectionByDeg(city.windDeg),
                windDirectionValue: city.windDeg
            },
            {
                name: 'Влажность',
                value: city.humidity,
                measure: '%',
                progressBar: true,
            },
            {
                name: 'Видимость',
                value: city.visibility / 1000,
                measure: 'км',
            },
            {
                name: 'Давление',
                value: city.pressure,
                measure: 'мм рт. ст',
                measureSm: 'Y',
            },
        ]);
    }, [city]);

    return (
        <>
            <FlatList list={info}/>
        </>
    );
};

export const SectionInfo = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles['section__header']}`}>
                <h2 className="title">Подробно на сегодня</h2>
            </div>
            <div className="section__content">
                <SectionFlatList/>
            </div>
        </section>
    );
};
