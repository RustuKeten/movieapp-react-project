import { Button, Input } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const urlData =
    "https://api.themoviedb.org/3/discover/movie?api_key=72a46907b39dcf8b2dd0323513a7d05d";

  const getData = async () => {
    try {
      const response = await axios.get(urlData);
      setMovieData(response.data.results);
      console.log(movieData);
    } catch (error) {
      console.error(error);
    }
  };
  // getData(); //* ilk datayı görmek için yazdık.
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="main d-flex justify-content-center mt-1 ">
          <Input
            className="border border-3"
            id="search"
            placeholder="search a movie"
          />
          <Button className="" variant="contained">
            Search
          </Button>
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {movieData?.map((movie, index) => {
            return <MovieCard {...movie} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
