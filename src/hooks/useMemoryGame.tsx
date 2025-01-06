import { useMemo, useState } from "react";
import {
  CardCollections,
  getRandomIndex,
  ICardInfo,
  shuffle,
} from "../utils/utils";
import { v4 as uuid } from "uuid";

interface IDataSave {
  level: number;
  score: {
    minutes: number;
    seconds: number;
  };
}
interface useMemoryGameParams {
  pauseTimer: () => void;
  resetTimer: () => void;
  minutes: number;
  seconds: number;
}
const useMemoryGame = ({
  pauseTimer,
  resetTimer,
  minutes,
  seconds,
}: useMemoryGameParams) => {
  const [hasComplete, setHasComplete] = useState<boolean>(false);
  const [hasNextLevel, setHasNextLevel] = useState<boolean>(true);
  const [level, setLevel] = useState<number>(1);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const firstCardIndexes = useMemo(() => {
    return getRandomIndex({
      amountOfCards: CardCollections.length,
      uniqueCards: 4, // Mulai dengan 4 kartu unik (8 kartu total)
    });
  }, []);

  const [cards, setCards] = useState<ICardInfo[]>(
    shuffle(firstCardIndexes.concat(firstCardIndexes)).map((index) => ({
      ...CardCollections[index],
      id: uuid(),
    }))
  );

  const [selectedCards, setSelectedCards] = useState<ICardInfo[]>([]);

  const handleOpenCards = (card: ICardInfo) => {
    setSelectedCards((selected) =>
      selected.map((se) => se.id).includes(card.id)
        ? selected
        : [...selected, { ...card, open: true }]
    );

    if (selectedCards.length > 0 && selectedCards.length % 2 === 1) {
      const isMatch =
        selectedCards[selectedCards.length - 1].code === card.code;
      if (!isMatch) {
        setTimeout(() => {
          setSelectedCards((selected) =>
            selected.filter((_card, index) => index < selected.length - 2)
          );
        }, 500);
      }
    }
    if (selectedCards.length === cards.length - 1) {
      pauseTimer();
      setTimeout(() => {
        setHasComplete(true);
        if (level === 5) {
          setHasNextLevel(false);
          setIsFinish(true);
        }
      }, 500);
    }
  };

  const goToNextLevel = () => {
    if (level === 5) {
      setHasNextLevel(false);
      return;
    }

    const nextAmountCards = cards.length + 4; // Tambahkan 4 kartu setiap level
    const uniqueCardsIndex = getRandomIndex({
      amountOfCards: CardCollections.length,
      uniqueCards: nextAmountCards / 2,
    });

    setCards(
      shuffle(uniqueCardsIndex.concat(uniqueCardsIndex)).map((index) => ({
        ...CardCollections[index],
        id: uuid(),
      }))
    );
    setHasComplete(false);
    resetTimer();
    setSelectedCards([]);
    setLevel((current) => current + 1);
    saveScore();
  };

  const handleFinish = () => {
    setHasComplete(false);
    setHasNextLevel(true);
    setIsFinish(false);
    setLevel(1);
    setCards(
      shuffle(firstCardIndexes.concat(firstCardIndexes)).map((index) => ({
        ...CardCollections[index],
        id: uuid(),
      }))
    );
    setSelectedCards([]);
    resetTimer();
  };

  const existingSave = JSON.parse(
    localStorage.getItem("score-memory-game") ?? "[]"
  );
  const saveScore = () => {
    const dataSave = existingSave
      .map((existing: IDataSave) => existing.level)
      .includes(level)
      ? existingSave.map((existing: IDataSave) => {
          if (existing.level === level) {
            return {
              ...existing,
              score: {
                minutes,
                seconds,
              },
            };
          } else {
            return existing;
          }
        })
      : [
          ...existingSave,
          {
            level: level,
            score: {
              minutes,
              seconds,
            },
          },
        ];

    localStorage.setItem("score-memory-game", JSON.stringify(dataSave));
  };

  return {
    cards,
    handleOpenCards,
    selectedCards,
    hasComplete,
    goToNextLevel,
    hasNextLevel,
    isFinish,
    handleFinish,
  };
};

export default useMemoryGame;
