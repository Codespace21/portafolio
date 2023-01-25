import "./css/index.css";

//Partials
import Hero from "./partials/Hero"

export default function App() {
  return (
    <div className="App">
      <div>
        <p className="flex justify-center bg-zinc-800">
          <Hero />
        </p>
      </div>
    </div>
  );
}
