import React, { createContext, useState } from "react";

export const SearchWeatherContext = createContext();

export const SearchWeatherProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [city, setCity] = useState({});
  const [cityWeek, setCityWeek] = useState([]);
  const [cityHour, setCityHour] = useState([]);

  return (
    <SearchWeatherContext.Provider value={
      { 
        isLoading, setIsLoading,
        historyList, setHistoryList,
        city, setCity,
        cityWeek, setCityWeek,
        cityHour, setCityHour
      }}>
      {props.children}
    </SearchWeatherContext.Provider>
  );
};
