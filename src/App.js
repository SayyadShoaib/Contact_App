import "./App.css";
import Navbar from "./Components/Nav";
import Allroute from "./Components/Allroute";
import { useSelector } from "react-redux";

function App() {
  const theme_state = useSelector((store) => {
    return store.dark;
  });
  return (
    <div
      className="App"
      style={
        theme_state === true
          ? {
              background: "#272727",
              fontFamily: "Montserrat sans-serif",
              color: "white",
              padding: "50px",
            }
          : {
              background: "white",
              fontFamily: "Montserrat sans-serif",
              color: "black",
              padding: "50px",
            }
      }
    >
      <Navbar color={theme_state ? "white" : "black"} />
      <Allroute />
    </div>
  );
}

export default App;
