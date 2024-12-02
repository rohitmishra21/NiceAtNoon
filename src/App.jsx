import Bag from "./components/Bag";
import Big from "./components/Big";
import Bigimg from "./components/Bigimg";
import Fotter from "./components/Fotter";
import Hero from "./components/Hero";
import Main from "./components/Main";
import { Maintwo } from "./components/Maintwo";
import Nav from "./components/Nav";
import Slide from "./components/Slide";
import Smallimg from "./components/Smallimg";
import Text from "./components/Text";
import Topfotter from "./components/Topfotter";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Slide />
      <Text />
      <Main />
      <Big />
      <Smallimg />
      <Bag />
      <Maintwo />
      <Bigimg />
      <Topfotter />
      <Fotter />
    </div>
  );
};

export default App;
