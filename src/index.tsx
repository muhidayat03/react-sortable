import { render } from "react-dom";
import "./index.css";
import SortableComponent from "./SortableComponent";

function App() {
  return (
    <div className="App">
      <SortableComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
