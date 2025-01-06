import React from "react";
import BackCard from "../assets/backcovercards.jpg";

interface CardProps {
  image: string;
  key: string;
  open: boolean;
  onClick: () => void;
  cardCount: number; // Tambahkan prop untuk jumlah kartu
}

const Card: React.FC<CardProps> = ({
  image,
  key,
  open,
  onClick,
  cardCount,
}) => {
  // Tentukan ukuran kartu berdasarkan jumlah kartu
  const cardSize =
    cardCount <= 8 ? "w-28 sm:w-32 md:w-40" : "w-20 sm:w-24 md:w-32";

  return (
    <div
      onClick={onClick}
      key={key}
      className={`relative ${cardSize} aspect-[3/4] ${
        open ? "[transform:rotateY(180deg)]" : "hover:scale-110"
      } [transform-style:preserve-3d] transition-all duration-300 cursor-pointer`}
    >
      {/* Sisi belakang kartu */}
      <div className="w-full h-full absolute [backface-visibility:hidden][transform:rotateY(0deg)]">
        <img src={BackCard} alt="Back cover" />
      </div>
      {/* Sisi depan kartu */}
      <div className="w-full h-full absolute [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <img src={image} alt="Card front" />
      </div>
    </div>
  );
};

export default Card;
