import Root from "./Root";
import About from "./About";

type RoutesesProps = {
  path: string;
};

const Routes: React.FC<RoutesesProps> = ({ path }) => {
  function useRouter() {
    if (path === "/") {
      return <Root />;
    }
    if (path === "/about") {
      return <About />;
    }
  }
  return <div>{useRouter()}</div>;
};

export default Routes;
