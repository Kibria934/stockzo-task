import "./App.css";
import Home from "./Homepage/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
