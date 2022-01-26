import { FC, useState } from "react";
import Card, { Card2 } from "./Card";
import update from "immutability-helper";

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}
export interface ContainerState {
  cards: Item[];
}

const Container: FC = () => {
  const [sort, setSort] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter",
    },
    {
      id: 6,
      text: "PROFIT",
    },
  ]);

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };

  return (
    <div style={style}>
      <div style={{ padding: 20 }}>
        {!sort && <button onClick={() => setSort(true)}>sort</button>}
        {sort && <button onClick={() => setSort(false)}>done</button>}
      </div>

      {sort &&
        cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        ))}
      {!sort &&
        cards.map((card, i) => <Card2 key={card.id} text={card.text} />)}
    </div>
  );
};

export default Container;
