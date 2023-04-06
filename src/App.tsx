import "./css/index.css";

//Partials
import Inicio from "./partials/Inicio";

export default function App() {
  return (
    <div className="App">
        <div className="flex justify-center w-full h-screen bg-space" style={{ minHeight: "500px", minWidth: "280px" }}>
          <Inicio />
        </div>
    </div>
  );
}
