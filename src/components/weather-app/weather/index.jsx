import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [wetherData, setWeatherData] = useState(null);

  async function fetchWeatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ce193d18f67a405768e7b0e9491db67f`
      );

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSearch() {}

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Weather
    </div>
  );
}
