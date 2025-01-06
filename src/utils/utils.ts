import Banana from "../assets/cards/banana.jpg";
import Mango from "../assets/cards/mango.jpg";
import Watermelon from "../assets/cards/watermelon.jpg";
import Apple from "../assets/cards/apple.jpg";
import Papaya from "../assets/cards/papaya.jpg";
import Grapes from "../assets/cards/grapes.jpg";
import Pineapple from "../assets/cards/pineapple.jpg";
import Strawberry from "../assets/cards/strawberry.jpg";
import Cat from "../assets/cards/cat.jpg";
import Rabbit from "../assets/cards/rabbit.jpg";
import Fish from "../assets/cards/fish.jpg";
import Bear from "../assets/cards/bear.jpg";
import Koala from "../assets/cards/koala.jpg";
import Elephant from "../assets/cards/elephant.jpg";
import Monkey from "../assets/cards/monkey.jpg";
import Shark from "../assets/cards/shark.jpg";

export interface ICardInfo {
  open: boolean;
  id?: string;
  image: string;
  code: string;
}

export const CardCollections: ICardInfo[] = [
  {
    code: "BANANA",
    image: Banana,
    open: false,
  },
  {
    code: "MANGO",
    image: Mango,
    open: false,
  },
  {
    code: "WATERMELON",
    image: Watermelon,
    open: false,
  },
  {
    code: "APPLE",
    image: Apple,
    open: false,
  },
  {
    code: "PAPAYA",
    image: Papaya,
    open: false,
  },
  {
    code: "GRAPES",
    image: Grapes,
    open: false,
  },
  {
    code: "PINEAPPLE",
    image: Pineapple,
    open: false,
  },
  {
    code: "STRAWBERRY",
    image: Strawberry,
    open: false,
  },
  {
    code: "CAT",
    image: Cat,
    open: false,
  },
  {
    code: "RABBIT",
    image: Rabbit,
    open: false,
  },
  {
    code: "FISH",
    image: Fish,
    open: false,
  },
  {
    code: "BEAR",
    image: Bear,
    open: false,
  },
  {
    code: "KOALA",
    image: Koala,
    open: false,
  },
  {
    code: "ELEPHANT",
    image: Elephant,
    open: false,
  },
  {
    code: "MONKEY",
    image: Monkey,
    open: false,
  },
  {
    code: "SHARK",
    image: Shark,
    open: false,
  },
];

export function getRandomIndex({
  amountOfCards,
  uniqueCards,
}: {
  amountOfCards: number;
  uniqueCards: number;
}) {
  const indexs: number[] = [];

  while (indexs.length < uniqueCards) {
    const currentIndex = Math.floor(Math.random() * amountOfCards);
    if (!indexs.includes(currentIndex)) {
      indexs.push(currentIndex);
    }
  }

  return indexs;
}

export function shuffle(array: number[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const formatTime = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}): string => {
  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
};
