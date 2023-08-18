import React, { useContext } from "react";
import { AsideFormSearch } from "../asideFormSearch";
import { AsideSlideList } from "../asideSlideList";
import { SearchWeatherContext } from "../../../../../shared/context/SearchWeatherProvider";

export const AsideSearchPanel = (props) => {
    const { historyList } = useContext(SearchWeatherContext);
    const list = historyList.slice();

    return (
        <>
            <AsideFormSearch
                handleHideSlide={props.handleClick}
            />

            {
                (list.length)
                    ? <AsideSlideList handleClick={props.handleClick} list={list.reverse()} />
                    : ''
            }
        </>
    );
}