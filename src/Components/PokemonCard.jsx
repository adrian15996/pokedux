import { StarButton } from "./StarButton";
import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const allTypes = types.map((types) => types.type.name).join(", ");
  const handleOnFavorite = () => {
    console.log("handle fvorite");
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
      cover={<img src={image} alt="name" />}
    >
      <Meta description={<p> {allTypes}</p>} />
    </Card>
  );
};

export { PokemonCard };
