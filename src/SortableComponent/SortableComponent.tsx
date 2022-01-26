import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

export const SortableComponent: React.FC = () => {
  const [sortable, setSortable] = useState(false);
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

  const toggleSortable = () => setSortable(!sortable);

  const handleSetList = (newState: any) => {
    setCards(newState);
  };

  const handleSelect = (event: any) => {
    console.log(event);
  };

  return (
    <div>
      <button onClick={toggleSortable}>{!sortable ? "Sort" : "Done"}</button>
      <ReactSortable
        list={cards}
        setList={handleSetList}
        onChoose={handleSelect}
        animation={500}
        selectedClass="active"
        chosenClass="active"
        disabled={!sortable}
      >
        {cards.map((item, index) => (
          <div key={item.id} className="card-container">
            <div
              className={`card ${sortable && "animation" + ((index % 2) + 1)}`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default SortableComponent;
