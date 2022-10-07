import "./assets/App.css";
import Routes from "./components/Routes";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [path, setPath] = useState<string>(window.location.pathname);
  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const goAbout = () => {
      setPath("/about");
    };
    const gomain = () => {
      setPath("/");
    };

    window.addEventListener("/", gomain);
    window.addEventListener("/about", goAbout);

    // clean up event listener
    return () => {
      window.removeEventListener("/", gomain);
      window.addEventListener("/about", goAbout);
    };
  }, []);
  return (
    <div className="App">
      <Routes path={path} />
    </div>
  );
};

export default App;
