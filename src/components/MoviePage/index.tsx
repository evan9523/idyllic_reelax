//@ts-nocheck

import React, { useEffect, useState } from "react";
import { CardContainer, HomeTitle, MovieContainer, TextLabel } from "./Styles";
import { useHistory } from "react-router-dom";
import SearchBar from "../SearchBar";
import Header from "../Header";
import Card from "../Card";
import { API_KEY, base_url } from "../../../keys";
import dummy from "../../data/mock.json";

const MoviePage = () => {
  const [active, setactive] = useState("");
  const [term, setterm] = useState("");
  const [movies, setmovies] = useState([]);
  const [defaultMovies, setdefaultMovies] = useState(true);
  const [sugg, setsugg] = useState(false);
  const [allsuggs, setallsuggs] = useState("");

  const history = useHistory();

  useEffect(() => {
    var session = localStorage.getItem("user");
    console.log(session);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser !== null) {
      setactive(storedUser);
      console.log(active);
    } else {
      history.push("/");
    }
  }, [active]);

  const getMovies = () => {
    setdefaultMovies(false);
    setsugg(false);
    var allSearches = [];
    localStorage.setItem("allSearches", JSON.stringify(allSearches));
    allSearches = JSON.parse(localStorage.getItem("allSearches"));
    allSearches.push(term);
    localStorage.setItem("allSearches", JSON.stringify(allSearches));

    if (term.length > 1) {
      fetch(base_url + "?s=" + term + "&apikey=" + API_KEY).then((res) =>
        res.json().then((data) => setmovies(data.Search ? data.Search : null))
      );
    }
  };

  const getallSearches = () => {
    setsugg(true);
    let searches = JSON.parse(localStorage.getItem("allSearches"));
    setallsuggs(searches);
  };
  return (
    <MovieContainer>
      <Header />
      <SearchBar
        onChange={(e) => setterm(e.target.value)}
        onSrBtn={() => getMovies()}
        onFocus={() => getallSearches()}
      />
      <HomeTitle>
        {sugg && allsuggs !== null
          ? "Last Search : " + allsuggs
          : !defaultMovies
          ? "Results For : " + term
          : "Our Picks"}
      </HomeTitle>
      {defaultMovies ? (
        <CardContainer>
          {dummy.map((i) => (
            <Card
              key={i.imdbID}
              title={i.Title}
              poster={i.Poster}
              onCardPress={() => history.push("/details/" + i.imdbID)}
              year={i.Year}
            />
          ))}
        </CardContainer>
      ) : (
        <CardContainer>
          {movies !== null ? (
            movies.map((i) => (
              <Card
                key={i.imdbID}
                title={i.Title}
                poster={i.Poster}
                onCardPress={() => {
                  setdefaultMovies(true);
                  history.push("/details/" + i.imdbID);
                }}
                year={i.Year}
              />
            ))
          ) : (
            <TextLabel>Sorry no matches found</TextLabel>
          )}
        </CardContainer>
      )}
    </MovieContainer>
  );
};

export default MoviePage;
