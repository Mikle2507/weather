import React, { useContext } from 'react';
import styles from './index.module.css';
import { SearchWeatherContext } from '../../../shared/context/SearchWeatherProvider';
import { Preloader, ProgressBar } from '../../../shared/ui';

export const FlatItem = (props) => {
    let classNameMeasure = `txt-medium ${styles['flat-item-big__value-measure']}`;
    const { isLoading } = useContext(SearchWeatherContext);

    if(props.params.measureSm === 'Y') {
        classNameMeasure += ` ${styles['flat-item-big__value-measure--xs']}`;
    }

    return (
        <div className={styles['flat-item-big']}>
            {
                isLoading
                ? <Preloader/>
                : (
                    <>
                        <div className={styles['flat-item-big__name']}>{props.params.name}</div>
                        <div className={`txt-black ${styles['flat-item-big__value']}`}>{props.params.value} <span className={classNameMeasure}>{props.params.measure}</span>
                        </div>

                        {
                            props.params.windDirectionName && (props.params.windDirectionValue !== null)
                            ? <div className={`txt-light ${styles['flat-item-big__under']}`}>
                                <svg className={styles['flat-item-big__under-svg']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" style={{
                                    transform: `rotate(${props.params.windDirectionValue + 225}deg)`
                                }}>
                                    <circle cx="19" cy="19" r="19"/>
                                    <path d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293
                                    32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951
                                    31.0029Z"/>
                                </svg>
                                {props.params.windDirectionName}
                            </div>
                            : ''
                        }

                        {
                            props.params.progressBar
                            ? <ProgressBar value = {props.params.value}/>
                            :''
                        }
                    </>
                )
            }
            
        </div>
    );
};