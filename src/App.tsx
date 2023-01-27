import "./css/index.css";

//Partials
import Hero from "./partials/Hero"

export default function App() {
  return (
    <div className="App">
        <div className="flex justify-center w-full bg-zinc-800">
          <Hero />
        </div>
    </div>
  );
}
