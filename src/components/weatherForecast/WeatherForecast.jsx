import "./WeatherForecast.css"

const WeatherForecast = ({location, date, temperature, description, icon }) => {
  return (
    <div className="weather-forecast">
      <img src={icon} alt="Weather Icon" />
      <div className="infoContainer">
        <h1 className="location">{location}</h1>
        <div className="date">{date}</div>
        <div className="temperature">{temperature}&deg;C</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default WeatherForecast;