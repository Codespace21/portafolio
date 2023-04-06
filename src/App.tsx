import "./css/index.css";

//Partials
import Inicio from "./partials/Inicio";

export default function App() {
  return (
    <div className="App flex justify-center bg-space">
        <div className="flex justify-center w-full h-screen bg-space" style={{ minHeight: "800px", minWidth: "388px", maxWidth:"1850px" }}>
          <Inicio />
        </div>
    </div>
  );
}
