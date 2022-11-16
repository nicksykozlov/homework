import { useState, useEffect } from "react";

export default function Weather(props) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=677092f830694cd791c170532221411&q=Брест&aqi=no`
      );
      const json = await response.json();
      setWeather(json);
      console.log(weather);
    })();
  }, []);

  return(
    <>
    
    </>
  )
}
