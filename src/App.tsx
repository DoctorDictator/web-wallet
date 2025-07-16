import "./App.css";
import Choice from "./components/choice";
import Generate from "./components/generate";
import Navbar from "./components/navbar";
import SeedPhrase from "./components/seedPhrase";

import { MnemonicsProvider } from "./components/wrapper";

function App() {
  return (
    <>
      <MnemonicsProvider>
        {" "}
        <Navbar />
        <Generate />
        <SeedPhrase />
        <Choice />
      </MnemonicsProvider>
    </>
  );
}

export default App;
