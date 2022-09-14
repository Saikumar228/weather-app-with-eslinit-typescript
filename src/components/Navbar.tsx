import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/provider";
import { Input, Button } from "reactstrap";
import { HiLocationMarker } from "react-icons/hi";
import { getWeatherByCity, getWeatherByLocation } from "../context/actions";

type Citytype = string;

function Navbar() {
  const weatherObject: {
    weatherState?: Record<string, unknown>;
    weatherDispatch?: Function;
  } = useContext(GlobalContext);
  const [city, setCity] = useState<Citytype>("");

  const handleWeatherByCity = () => {
    getWeatherByCity(city)(weatherObject.weatherDispatch!);
  };
  const handleLocationData = () => {
    getWeatherByLocation()(weatherObject.weatherDispatch!);
  };
  return (
    <div className="nabar-header">
      <div className="serach-card">
        <Input
          onKeyPress={({ key }) => {
            key === "Enter" ? handleWeatherByCity() : undefined;
          }}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className="search-input"
          placeholder="City"
        />
        <Button onClick={handleWeatherByCity} className="search-button">
          Search
        </Button>
      </div>
      <div className="your-location-card">
        <Button onClick={handleLocationData} className="weather-button">
          <HiLocationMarker className="location-icon" />
          Your Location Weather
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
