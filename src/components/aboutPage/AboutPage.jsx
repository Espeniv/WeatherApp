import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <h1 className="about-page-title">About</h1>
      </div>
      <div className="text-container">
        <p>
          {" "}
          This is a simple weather app developed to freshen up my react and
          general front-end skills.
        </p>
        <p>
          {" "}
          The app uses the GeoDB Cities API to fetch location data, and the
          OpenWeatherMap API to fetch the weather data for a given location.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
