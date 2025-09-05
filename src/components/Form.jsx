import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../features/api/fetchWeather.js";

const Form = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const getCity = (e) => {
        e.preventDefault();
        if (city.trim()) {
            dispatch(fetchWeather(city));
            setCity("");
        }
    };

    return (
        <form onSubmit={getCity}>
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;
