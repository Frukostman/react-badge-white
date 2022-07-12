import FunctionalComponent from "./components/FunctionalComp/FunctionalComponent";
import ClassComponent from "./components/ClassComp/ClassComponent";
import HooksComponent from "./components/HooksComp/HooksComponent";
import Cart from "./components/Cart/Cart";
import DB from "../fakeDB/fakeDB.js";

import { AppProvider } from "../context/useAppContext";

function App() {
  return (
    <AppProvider>
      <h1>React white badge</h1>
      <FunctionalComponent exampleProps={DB[0]} />
      <ClassComponent exampleProps={DB[1]} />
      <HooksComponent />
      <Cart />
    </AppProvider>
  );
}

export default App;
