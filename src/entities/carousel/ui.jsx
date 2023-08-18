import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { CarouselItem } from './carouselItem/ui';
import { throttle } from '../../shared/utils/throttle';

const cardWidth = 100;
const cardGap = 24;
const cardWidthAndGap = cardWidth + cardGap;

export const Carousel = ({ list }) => {

    const [offset, setOffset] = useState(0);
    const [btnPrevDisabled, setBtnPrevDisabled] = useState(true);
    const [btnNextDisabled, setBtnNextDisabled] = useState(false);
    const refList = useRef(null);
    const maxWidth = list.length * cardWidthAndGap - cardGap;

    const handleNext = () => {
        setOffset(offset - cardWidthAndGap);
    }

    const handlePrev = () => {
        setOffset(offset + cardWidthAndGap);
    }

    const styleUL = {
        transform: `translateX(${offset}px`
    };

    useEffect(() => {
        checkCarousel();
    }, [offset, list]);

    const checkCarousel = () => {
        if (maxWidth + offset <= refList.current.offsetWidth) {
            setBtnNextDisabled(true);
        } else {
            setBtnNextDisabled(false);
        }

        if (offset < 0) {
            setBtnPrevDisabled(false);
        } else {
            setBtnPrevDisabled(true);
        }
    }

    const optimizedResize = throttle(() => {
        checkCarousel();
    }, 500);


    window.addEventListener('resize', optimizedResize, true);

    return (
        <div className={styles['slider']}>

            <div className={styles['slider-inner']}>
                <ul className={`list-reset row ${styles['slider__container']}`} style={styleUL} ref={refList}>
                    {
                        list.map((item, index) =>
                            <li key={index} className={styles['slider__slide']}>

                                <CarouselItem
                                    classNames={{
                                        block: styles['slider__flat-item']
                                    }} params={item}
                                />
                            </li>
                        )
                    }

                </ul>
            </div>

            <div className={styles['slider__btns']}>
                <button
                    className={`btn-reset ${styles['slider__btn']} ${styles['slider__btn--prev']}`} disabled={btnPrevDisabled ? true : false}
                    onClick={handlePrev}
                >Назад
                    <svg className={styles['slider__btn-svg']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
                        <circle cx="19" cy="19" r="19" transform="rotate(-180 19 19)" />
                        <path
                            d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5"
                            strokeWidth="3" />
                    </svg>
                </button>
                <button
                    className={`btn-reset ${styles['slider__btn']} ${styles['slider__btn--next']}`}
                    disabled={btnNextDisabled ? true : false}
                    onClick={handleNext}
                >Далее
                    <svg className={styles['slider__btn-svg']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
                        <circle cx="19" cy="19" r="19" />
                        <path d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5" strokeWidth="3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
