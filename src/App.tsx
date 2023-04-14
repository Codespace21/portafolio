import "./css/index.css";

//Partials
import Inicio from "./partials/Inicio";
import Skills from "./partials/Skills";

export default function App() {
  return (
    <div className="App flex justify-center bg-space w-full h-auto">
        <div className="block justify-center h-auto w-full bg-space " style={{ minHeight: "600px" ,minWidth: "388px", maxWidth:"1850px" }}>
          <Inicio />
          <Skills />
        </div>
    </div>
  );
}
