import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero"; // Yeh import theek hai

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero /> {/* Yeh capital H wala hona chahiye */}
    </div>
  );
};

export default App;
