import React, { useState } from "react";
import Card from "./Card";
import CompleteModal from "./CompleteModal";
import useMemoryGame from "../hooks/useMemoryGame";
import { useStopwatch } from "react-timer-hook";
import { formatTime } from "../utils/utils";
import StartGame from "./StartGame"; // Import komponen StartGame

const MemoryGame: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false); // State untuk mengontrol apakah game sudah dimulai
  const { minutes, seconds, pause, reset, start } = useStopwatch({
    autoStart: false,
  }); // AutoStart diubah menjadi false
  const {
    cards,
    handleOpenCards,
    selectedCards,
    hasComplete,
    goToNextLevel,
    hasNextLevel,
    handleFinish,
    isFinish,
  } = useMemoryGame({
    pauseTimer: pause,
    resetTimer: reset,
    minutes,
    seconds,
  });

  const handleStartGame = () => {
    setIsGameStarted(true);
    start(); // Mulai stopwatch
  };

  return (
    <div className="relative">
      {!isGameStarted && <StartGame onStart={handleStartGame} />}{" "}
      {/* Tampilkan StartGame jika game belum dimulai */}
      <div className="w-full flex justify-center mb-4 font-mono">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
            {formatTime({
              minutes,
              seconds,
            })}
          </p>
        </div>
      </div>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-fit mx-auto pb-8">
        {" "}
        {/* Tambahkan pb-8 untuk padding-bottom */}
        <CompleteModal
          open={hasComplete}
          showNext={hasNextLevel}
          onClickNext={goToNextLevel}
          onFinish={handleFinish}
          isFinish={isFinish}
          time={{
            minutes,
            seconds,
          }}
        />
        {cards.map((card) => {
          return (
            <Card
              onClick={() => handleOpenCards(card)}
              image={card.image}
              key={card.id ?? ""}
              open={selectedCards
                .map((selected) => selected.id)
                .includes(card.id)}
              cardCount={cards.length} // Kirim jumlah kartu sebagai prop
            />
          );
        })}
      </section>
    </div>
  );
};

export default MemoryGame;
