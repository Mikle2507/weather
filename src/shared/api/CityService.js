import {
    formatDate
} from "../utils/date";

const key = '8fbb84de1b7a29bd6c77c6413abf954c';

export class CityService {
    static async getCityByQuery(query = '') {

        if (!query.length) {
            return null;
        }

        const src = `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`;

        try {
            const response = await fetch(src);
            const data = await response.json();

            if (data[0]) {
                return data[0];
            }

        } catch (e) {
            throw new Error(e.message);
        }

        return null;
    }

    static async getWeatherByCoords(lat, lon) {

        if (!lat || !lon) {
            return '';
        }


        const src = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`;

        try {
            const response = await fetch(src);
            const data = await response.json();

            if (data) {
                return data;
            }

        } catch (e) {
            throw new Error(e.message);
        }

        return '';

    }

    static async getForecastDaysByCoords(lat, lon) {
        if (!lat || !lon) {
            return '';
        }
        const src = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`;

        try {
            const response = await fetch(src);
            const data = await response.json();

            if (data) {
                return data;
            }

        } catch (e) {
            throw new Error(e.message);
        }

        return '';
    }

    static parseForecastDays(list = []) {

        if (!list.length) {
            return [];
        }

        const objList = {};

        const dayHours = [
            9, 12, 15, 18
        ];

        const nightHours = [
            0, 3, 6, 21
        ];

        let curDate = 0;

        list.forEach((item) => {
            let date = new Date(item.dt_txt);
            curDate = date.getDate();
            if (!objList[curDate]) {
                objList[curDate] = {
                    date: formatDate(date),
                    alt: item.weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    night: null,
                    day: null
                };
            }

            if (objList[curDate]) {
                if (nightHours.includes(date.getHours()) && !objList[curDate].night) {
                    objList[curDate].night = {
                        temp: Math.round(item.main.temp),
                    };
                }

                if (dayHours.includes(date.getHours()) && !objList[curDate].day) {
                    objList[curDate].day = {
                        temp: Math.round(item.main.temp)
                    };
                }

            }

        });


        const result = [];

        for (let [key, value] of Object.entries(objList)) {
            result.push(value);
        }

        result.shift();
        result[0].date = 'Завтра';

        return result;
    }

    static parseForecastHours(list = []) {

        if (!list.length) {
            return [];
        }

        const result = [];
        let startHour = null;


        for (let i = 0; i < 4; i++) {

            const item = list[i];
            startHour = new Date(list[i].dt_txt);

            for (let j = 0; j < 3; j++) {
                result.push({
                    date: `${startHour.getHours()+j}:00`,
                    alt: item.weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    day: {
                        temp: Math.round(item.main.temp)
                    },
                    night: {
                        temp: null
                    },
                });
            }

        }

        return result;
    }
}