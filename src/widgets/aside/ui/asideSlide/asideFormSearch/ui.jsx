import React, { useState } from "react";
import { Button, Input } from "../../../../../shared/ui";
import styles from '../index.module.css';
import { useCity } from "../../../../../shared/hooks/useCity";

export const AsideFormSearch = ({ handleHideSlide }) => {
    const [query, setQuery] = useState('');
    const [queryError, setQueryError] = useState(false);

    const {fetchCity, isLoadingCity} = useCity(query, true, () => {
        handleHideSlide();
        setQuery('');
    });


    const handleChange = (e) => {

        if(e.target.value.match(/[^А-Яа-я\s]/g)) {
            setQuery(query);
            setQueryError(true);
        } else {
            setQuery(e.target.value);
            setQueryError(false);
        }
    };

    
    const submitSearch = async (e) => {
        e.preventDefault();        
        if (!isLoadingCity) {
            await fetchCity();
        }
    }

    return (
        <>
            <form className={`row ${styles['slide__form']}`}>
                {queryError
                ? (
                    <>
                        <div className={styles['error']}>Используйте кириллицу</div>
                    </>
                )
                : ''
                }
                <Input
                    type="text"
                    name="location-search"
                    placeholder="Введите город"
                    value={query}
                    onChange={handleChange}
                    icon={
                        {
                            position: 'left',
                            name: 'search'
                        }
                    }
                />
                <Button onClick={submitSearch}>Найти</Button>
            </form>
        </>
    );
}