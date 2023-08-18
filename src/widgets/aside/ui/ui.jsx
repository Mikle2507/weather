import React, { useEffect } from 'react';
import styles from './index.module.css';
import { ToggleTheme } from '../../../features/toggleTheme';
import { Panel } from '../../../entities/panel';
import { AsideButtonSearch } from './asideButtonSearch/ui';
import { useCity } from '../../../shared/hooks/useCity';

export const Aside = () => {
    const {fetchCity} = useCity('Москва');

    useEffect(()=>{
        fetchCity();
    }, []);
   

    return (
        <aside id="aside" className={`scrollbar ${styles['aside']}`}>
            <div className={`${styles['aside__inner']}`}>
                <div className={`row row--align-center row--between ${styles['aside__btns']}`}>
                    <AsideButtonSearch/>
                    <ToggleTheme/>
                </div>
                <Panel/>
            </div>
        </aside>
    );
};