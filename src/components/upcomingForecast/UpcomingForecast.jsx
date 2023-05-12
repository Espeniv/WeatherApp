import "./UpcomingForecast.css";

const UpcomingForecast = ({ date, temperature, description, icon }) => {
  return (
    <div className="upcoming-forecast">
      <div className="date">{date}</div>
      <div className="temperature">{temperature}&deg;C</div>
      <div className="description">{description}</div>
      <img src={icon} alt="Weather Icon" />
    </div>
  );
};

export default UpcomingForecast;
