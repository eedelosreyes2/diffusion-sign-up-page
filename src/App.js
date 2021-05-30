// import "./App.css";
import "./AppV2.css";
// import HeroComponent from "./components/HeroComponent";
import HeroComponentV2 from "./components/HeroComponentV2";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <div style={{ height: "50px" }} />
      <Particles
        params={{
          particles: {
            color: {
              value: "#00b1d2",
            },
            line_linked: {
              color: {
                value: "#FDDB27",
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <HeroComponentV2 />
      </div>
    </div>
  );
}

export default App;
