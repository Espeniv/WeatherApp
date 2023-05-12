import "./UpcomingForecast.css";

const UpcomingForecast = ({ date, temperature, description, icon }) => {
  return (
    <div className="upcoming-forecast">
      <div className="each-day">
        <div className="date">{date}</div>
        <p>|</p>
        <div className="temperature">{temperature}&deg;C</div>
        <p>|</p>
        <div className="description">{description}</div>
        <p>|</p>
        <img src={icon} alt="Weather Icon" />
      </div>
    </div>
  );
};

export default UpcomingForecast;
