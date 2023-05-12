import "./WeatherForecast.css";

const WeatherForecast = ({ date, temperature, description, icon }) => {
  return (
    <div className="weather-forecast">
      <div className="infoContainer">
        <h1 className="today-text">{"Today"}</h1>
        <div className="date">{date}</div>
        <div className="temperature">{temperature}&deg;C</div>
        <div className="description">{description}</div>
      </div>
      <img src={icon} alt="Weather Icon" />
    </div>
  );
};

export default WeatherForecast;
