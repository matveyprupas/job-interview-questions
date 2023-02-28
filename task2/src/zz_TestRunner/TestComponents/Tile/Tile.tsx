import React from "react";
import { Link } from "react-router-dom";
import "./Tile.css";

interface TileProps {
  title: string;
  url: string;
}

const Tile: React.FC<TileProps> = ({ title, url }: TileProps) => {
  return (
    <Link to={url} className="tile">
      <span className="title">{title}</span>
    </Link>
  );
};

export default Tile;
