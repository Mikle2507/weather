import { useContext } from "react";
import { SearchWeatherContext } from "../context/SearchWeatherProvider";
import { useFetching } from "./useFetching";
import { CityService } from "../api/CityService";
import { formatDate } from "../utils/date";
import { convertPressure } from "../utils/convertValues";

export const useCity = (query = '', setHistory = false, callback = null) => {
    
    const { 
        setIsLoading, 
        setCity, 
        historyList, setHistoryList, 
        setCityWeek,
        setCityHour
    } = useContext(SearchWeatherContext);
  
    const [fetchCity, isLoadingCity] = useFetching(async () => {

        if(query.length) {
            setIsLoading(true);
            const response = await CityService.getCityByQuery(query);
            
            if (response) {
                const cityName = response.display_name.split(',')[0];
                const responseWeather = await CityService.getWeatherByCoords(response.lat, response.lon);

                if(responseWeather) {
                    setCity({
                        value: Math.round(responseWeather.main.temp),
                        valueFeel: Math.round(responseWeather.main.feels_like),
                        alt: responseWeather.weather[0].description,
                        icon: `https://openweathermap.org/img/wn/${responseWeather.weather[0].icon}@4x.png`,
                        typeName: responseWeather.weather[0].description,
                        day: 'Сегодня',
                        date: formatDate(),
                        location: cityName,
                        humidity: responseWeather.main.humidity, //влажность
                        pressure: convertPressure(responseWeather.main.pressure), //давление
                        visibility: responseWeather.visibility, // видимость
                        wind: responseWeather.wind.speed.toFixed(1), // ветер
                        windDeg: responseWeather.wind.deg, // направление ветра
                    });
                    
                    if(setHistory) {
                        historyList.push({cityName:cityName, query: cityName});
                        setHistoryList(historyList);
                    }


                    if(callback) {
                        callback();
                    }
                }

                const responseWeatherWeek = await CityService.getForecastDaysByCoords(response.lat, response.lon);

                setCityWeek(CityService.parseForecastDays(responseWeatherWeek.list));
                setCityHour(CityService.parseForecastHours(responseWeatherWeek.list));


            } else {
                alert('Упс! Город не найден, попробуйте другой');
            }
            
            setIsLoading(false);
        } 
  
    });

    return {
        fetchCity,
        isLoadingCity
    }
};
