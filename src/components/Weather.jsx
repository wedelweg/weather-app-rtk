import { useSelector } from "react-redux";

const Weather = () => {
    const weather = useSelector((state) => state.weather);

    if (!weather || !weather.city) {
        return <p>Введите город, чтобы получить погоду</p>;
    }

    return (
        <div className="infoWeath">
            <p>Location: {weather.city}</p>
            <p>Temp: {weather.temp}°C</p>
            <p>Pressure: {weather.pressure} hPa</p>
        </div>
    );
};

export default Weather;
