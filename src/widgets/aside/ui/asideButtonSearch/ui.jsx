import { useState } from "react";
import styles from '../index.module.css';
import { Button } from "../../../../shared/ui";
import { AsideSlide } from "../asideSlide/ui";

export const AsideButtonSearch = () => {
    const [active, setActive] = useState(false);

    const handleClick = (active) => {
        setActive(active);
    }

    return (
        <>
            <Button onClick={()=>setActive(true)} className={`${styles['aside__btn']}`}>Поиск города</Button>
           
            <AsideSlide 
                active={active}
                handleClick={handleClick}
                classNames={{
                    block: styles['aside__slide'],
                    inner: styles['aside__slide-inner']
                }}
            />
        </>
    );
}