import rain from "../assets/rain.png";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";

export const getDateDay = () => {
  const today = new Date();
  const day = String(today.getDate());
  return day;
};

export const getDateMonth = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1);
  return month;
};

export const kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273.15;
  return celsius;
};

export const getIcon = (data) => {
  if (data.description.includes("rain")) {
    return rain;
  }
  if (data.description.includes("few") || data.description.includes("clear")) {
    return sun;
  } else {
    return cloud;
  }
};
