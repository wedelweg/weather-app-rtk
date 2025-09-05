import {api_key, base_url} from "../../utils/constants.js";
import {setWeather} from "../weather/weatherSlice.js";

export const fetchWeather = (city) => {
    return (dispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                dispatch(setWeather({
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure
                }))
            })
            .catch(e => {
                console.log(e);
                dispatch(setWeather({
                    city: "Enter correct city name",
                    temp: NaN,
                    pressure: NaN
                }))
            })
    }
}