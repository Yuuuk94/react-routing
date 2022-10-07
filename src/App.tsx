import "./assets/App.css";
import Routes from "./components/Routes";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [path, setPath] = useState<string>("");
  useEffect(() => {
    setPath(window.location.pathname);
    // define callback as separate function so it can be removed later with cleanup function
    const goAbout = () => {
      setPath("/about");
    };
    const gomain = () => {
      setPath("/");
    };

    window.addEventListener("main", gomain);
    window.addEventListener("about", goAbout);

    // clean up event listener
    return () => {
      window.removeEventListener("main", gomain);
      window.addEventListener("about", goAbout);
    };
  }, []);
  return (
    <div className="App">
      <Routes path={path} />
    </div>
  );
};

export default App;
