import "./App.css";
import Weathers from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Weather App React</h1>
        <Weathers />
        <p className="text-center">
          This project was made by{" "}
          <a
            href="https://github.com/Whitney-Murugi"
            target="_blank"
            rel="noreferrer"
          >
            Whitney Mmaitsi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Whitney-Murugi/final-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          .
        </p>
      </div>
    </div>
  );
}
