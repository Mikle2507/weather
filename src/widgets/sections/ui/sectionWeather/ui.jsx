import React from 'react';
import styles from '../index.module.css';
import { Tabs } from './tabs/ui';

export const SectionWeather = () => {

    return (
        <section className={styles.section}>
            <div className={`row ${styles['section__header']} ${styles['row']}`}>
                <h2 className="title">Прогноз</h2>
                <Tabs/>
            </div>
            <div id="section-weather" className="section__content"></div>
        </section>
    );
};