import "./App.css";
import CardPhrase from "./components/CardPhrase";
import curiosities from "./db/spaceCuriosities.json";
import { useState } from "react";
import { getRandomItem } from "./utilities/randomIndex";

const bgSpace = ["bg1", "bg2", "bg3", "bg4"];

function App() {

  const handleQuote = () => {
    setQuote(getRandomItem(curiosities));
    setToggleBg(getRandomItem(bgSpace));
  };

  const [quote, setQuote] = useState(getRandomItem(curiosities));
  const [toggleBg, setToggleBg] = useState(getRandomItem(bgSpace));

  return (
    <main className={`main ${toggleBg}`}>
      <CardPhrase quote={quote} setQuote={setQuote} setToggleBg={setToggleBg} handleQuote={handleQuote}/>
    </main>
  );
}

export default App;
