//@ts-nocheck

import React, { useEffect, useState } from "react";
import {
  CoverImg,
  DetailCard,
  DetailContainer,
  LabelHead,
  MoreContainer,
  MovieTitle,
  Plot,
  Section,
  Stat,
  StatContainer,
  StatWrapper,
} from "./Styles";
import { useHistory } from "react-router-dom";
import { API_KEY, base_url } from "../../keys";
import Button from "../Button";

const Details = (props: any) => {
  const history = useHistory();
  console.warn(props);
  const [title, settitle] = useState("");
  const [poster, setposter] = useState("");
  const [genre, setgenre] = useState("");
  const [rating, setrating] = useState("");
  const [rt, setrt] = useState("");
  const [plot, setPlot] = useState("");
  const [active, setactive] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser !== null) {
      setactive(storedUser);
      console.log(active);
    } else {
      history.push("/");
    }
  }, [active]);

  useEffect(() => {
    const movieId = props.match.params.id;
    fetch(base_url + "?i=" + movieId + "&apikey=" + API_KEY).then((res) =>
      res.json().then((data) => {
        settitle(data.Title);
        setposter(data.Poster);
        setgenre(data.Genre);
        setrating(data.imdbRating);
        setrt(data.Year);
        setPlot(data.Plot);
      })
    );
  }, []);

  return (
    <DetailContainer>
      <DetailCard>
        <>
          <Section>
            <CoverImg src={poster} />
            <MovieTitle>{title}</MovieTitle>
          </Section>

          <StatContainer>
            <StatWrapper>
              <LabelHead> 🟢 Genre</LabelHead>
              <Stat>{genre}</Stat>
            </StatWrapper>

            <StatWrapper>
              <LabelHead> ⭐ Rating</LabelHead>
              <Stat>{rating}</Stat>
            </StatWrapper>
            <StatWrapper>
              <LabelHead> 📅 Year</LabelHead>
              <Stat>{rt}</Stat>
            </StatWrapper>
          </StatContainer>

          <MoreContainer>
            <LabelHead>Plot</LabelHead>
            <Plot>{plot}</Plot>
          </MoreContainer>

          <Button title="Done" onPress={() => history.push("/movie")} />
        </>
      </DetailCard>
    </DetailContainer>
  );
};

export default Details;
