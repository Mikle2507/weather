import React from 'react';
import styles from './index.module.css';
import { SectionWeather } from './sectionWeather/ui';
import { SectionInfo } from './sectionInfo/ui';

export const Sections = () => {
    return (
        <section className={styles.sections}>
            <SectionWeather/>
            <SectionInfo/>
        </section>
    );
};