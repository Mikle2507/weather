import React, { useContext, useEffect, useState } from 'react';
import {createPortal} from 'react-dom';
import styles from './index.module.css';
import { Carousel } from '../../../../../entities/carousel';
import { SearchWeatherContext } from '../../../../../shared/context/SearchWeatherProvider';

const TabsNav = ({active, handleClick, list}) => {
    return (
        <ul className="list-reset row row--16">
            {
                list.map((item, index) => 
                    <li key={index}>
                        <button onClick={(e)=>{
                            handleClick(e.target.dataset.id);
                        }} className={`btn-reset ${styles['btn-border']} ${item.code === active ? styles['active']: ''}`} data-id={item.code}>{item.name}</button>
                    </li>
                )
            }
        </ul>
    );
}

const TabsContent = ({active, list}) => {

    const node = document.querySelector('#section-weather');
    if(!node) return null;


    return createPortal((
        <ul className="list-reset">
            {
                list.map((item, index) => 
                    <li key={index} className={`${styles['js-tab-content']} ${item.code === active ? styles['active']: ''}`} data-id={item.code}>
                        <Carousel list = {item.list}/>
                    </li>
                )
            }
            
        </ul>
    ), node);
}


export const Tabs = () => {   

    const [active, setActive] = useState('');
    const { 
        cityWeek,
        cityHour
    } = useContext(SearchWeatherContext);
    const [weekList, setWeekList] = useState([]);
    const [hourList, setHourList] = useState([]);

    const list = [
        { 
            code:"week",
            name: 'на неделю',
            list: weekList
        },
        { 
            code:"hour",
            name: 'на неделю',
            list: hourList
        }
    ];


    useEffect(()=>{
        setActive('week');
        setWeekList(cityWeek);
        setHourList(cityHour);
    }, [cityWeek, cityHour]);

    const setTab = (code) => {
        setActive(code);
    };

    return (
        <>
            <TabsNav active={active} handleClick={setTab} list = {list}/>
            <TabsContent active={active} list = {list}/>
        </>
    );
};