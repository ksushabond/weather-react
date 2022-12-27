import "./App.css";
import Search from "./Search";
import City from "./City";
import Footer from "./Footer";
import Forecast from "./Forecast";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather />
            <Search />
            <City />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
