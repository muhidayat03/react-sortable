import { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import ReactDnD from "./ReactDnD";
import SortableComponent from "./SortableComponent";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";

function App() {
  const [type, setType] = useState(1);

  return (
    <div className="App">
      <div>
        <button onClick={() => setType(1)}>Sortable js</button>
        <button onClick={() => setType(2)}>React DnD</button>
      </div>

      <h1>{type === 1 ? "Sortable js" : "React DnD"}</h1>

      {type === 1 && <SortableComponent />}
      {type === 2 && (
        <DndProvider
          backend={TouchBackend}
          options={{ enableMouseEvents: true }}
        >
          <ReactDnD />
        </DndProvider>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
