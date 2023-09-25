import "./App.css";
import CardPhrase from "./components/CardPhrase";
import curiosities from "./db/spaceCuriosities.json";
import { useState } from "react";
import { getRandomItem } from "./utilities/randomIndex";

const bgSpace = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7"];

function App() {
  const handleQuote = () => {
    setQuote(getRandomItem(curiosities));
    setChangeBg(getRandomItem(bgSpace));
  };

  const [quote, setQuote] = useState(getRandomItem(curiosities));
  const [changeBg, setChangeBg] = useState(getRandomItem(bgSpace));

  return (
    <main className={`main ${changeBg}`}>
      <CardPhrase quote={quote} handleQuote={handleQuote} />
    </main>
  );
}

export default App;
