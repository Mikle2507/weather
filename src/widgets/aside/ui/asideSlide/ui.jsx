import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import styles from './index.module.css';
import { AsideSearchPanel } from './asideSearchPanel';


export const AsideSlide = (props) => {

    const [active, setActive] = useState(props.active);
    const slideRef = useRef(null);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    useEffect(() => {

        if (slideRef.current) {

            if (active) {
                slideRef.current.classList.add(styles['active']);
                setTimeout(e => {
                    slideRef.current.classList.add(styles['show']);
                }, 50);

            } else {
                slideRef.current.classList.remove(styles['show']);
                setTimeout(e => {
                    slideRef.current.classList.remove(styles['active']);
                }, 250);
            }
        }

    }, [active]);

    
    const node = document.querySelector('#aside');
    if(!node) return null;
    
    return createPortal((
        <div className={`scrollbar ${styles['slide']} ${props.classNames.block}`} ref={slideRef}>
            <div className={`${styles['slide__inner']} ${props.classNames.inner}`}>
                <button onClick={()=>{
                    setActive(!active);
                    props.handleClick(!active);
                }} className={`btn-reset btn-close ${styles['slide__close']}`}>Закрыть панель поиска</button>
                <AsideSearchPanel handleClick={()=>{
                    props.handleClick(!active);
                }}/>
            </div>
        </div>
    ),node);
};