import React from "react";
import {  CardImg, CardWrapper  } from "./Styles";

interface CardProps {
  poster: string;
  onCardPress(): any;
}
const Card = (props: CardProps) => {
  const { poster, onCardPress } = props;
  return (
    <CardWrapper onClick={onCardPress}>
      <CardImg src={poster} />
    </CardWrapper>
  );
};

export default Card;
