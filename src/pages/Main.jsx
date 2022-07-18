import { FormGroup, FormControl, Button, Input } from "@mui/material";
import { useState, useEffect } from "react";

import React from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchData, setSearchData] = useState([]);
  const urlData =
    "https://api.themoviedb.org/3/discover/movie?api_key=72a46907b39dcf8b2dd0323513a7d05d";
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=72a46907b39dcf8b2dd0323513a7d05d&query=${searchMovie}`;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(urlSearch);
      setSearchData(response.data.results);
      console.log(searchData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, [searchMovie]);

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "10rem" }}>
        <div className="main d-flex justify-content-center bg-secondary mb-2">
          <FormGroup>
            <FormControl>
              <Input
                className="border border-3 bg-white"
                id="search"
                value={searchMovie}
                placeholder="search a movie"
                onChange={(e) => setSearchMovie(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              className="btn"
              variant="contained"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </FormGroup>
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center m-2">
          {searchMovie
            ? searchData?.map((singleSearch, index) => {
                return (
                  <MovieCard
                    {...singleSearch}
                    key={index}
                    onClick={handleDetail}
                  />
                );
              })
            : movieData?.map((movie, index) => {
                return (
                  <MovieCard {...movie} key={index} onClick={handleDetail} />
                );
              })}
          ;
        </div>
      </div>
    </div>
  );
};

export default Main;
