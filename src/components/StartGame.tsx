// StartGame.tsx
import React from "react";

interface StartGameProps {
  onStart: () => void;
}

const StartGame: React.FC<StartGameProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md w-full animate-fadein">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">Memory Game</h2>
        <p className="text-gray-600 mb-6">
          Test your memory by matching pairs of cards. Click the button below to
          start!
        </p>
        <button
          onClick={onStart}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          <span className="text-2xl font-bold">Play Game</span>
        </button>
      </div>
    </div>
  );
};

export default StartGame;
