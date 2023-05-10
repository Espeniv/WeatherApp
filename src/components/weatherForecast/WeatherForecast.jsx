import "./WeatherForecast.css"

const WeatherForecast = ({location, date, temperature, description, iconUrl }) => {
  return (
    <div className="weather-forecast">
      <h1 className="location">{location}</h1>
      <div className="date">{date}</div>
      <div className="temperature">{temperature}&deg;C</div>
      <div className="description">{description}</div>
      <img src={iconUrl} alt="Weather Icon" />
    </div>
  );
};

export default WeatherForecast;