import React from "react";
import { CardHeader, CardHeaderWrapper, CardImg, CardWrapper } from "./Styles";

interface CardProps {
  title?: string;
  poster: string;
  onCardPress(): any;
}
const Card = (props: CardProps) => {
  const { title, poster, onCardPress } = props;
  return (
    <CardWrapper onClick={onCardPress}>
      <CardImg src={poster} />
      <CardHeaderWrapper>{title}</CardHeaderWrapper>
    </CardWrapper>
  );
};

export default Card;
