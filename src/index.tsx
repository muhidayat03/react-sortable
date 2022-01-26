import React, { useState } from "react";
import { render } from "react-dom";
import { ReactSortable } from "react-sortablejs";
import "./index.css";

export const BasicFunction: React.FC = () => {
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

  const style = {
    border: "1px solid #ededed",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    height: "40px",
    padding: "16px",
    marginBottom: ".5rem",
    backgroundColor: "white",
    cursor: "move",
  };

  const handleSetList = (newState: any) => {
    setCards(newState);
  };

  const handleSelect = (event: any) => {
    console.log(event);
  };

  return (
    <ReactSortable
      list={cards}
      setList={handleSetList}
      onChoose={handleSelect}
      animation={1000}
      selectedClass="active"
      chosenClass="active"
    >
      {cards.map((item) => (
        <div key={item.id} style={style}>
          {item.text}
        </div>
      ))}
    </ReactSortable>
  );
};

function App() {
  return (
    <div className="App">
      <BasicFunction />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
