/* eslint-disable react/prop-types */
import "./CardPhrase.css";
import { PiArrowClockwiseBold } from "react-icons/pi";

console

const CardPhrase = ({ quote, handleQuote }) => {


  return (
    <article className="cardContainer">
      <div className="cardPhrase">
        <h1 id="card__title">InfoGalax</h1>
        <p id="cardPharagraph">{quote.phrase}</p>
        <button className="cardBtn" onClick={handleQuote}>
          <PiArrowClockwiseBold />
        </button>
      </div>

      <div className="cardPlanet"></div>
      <footer className="cardFooter">
        <p>Fuente: {quote.author}</p>
      </footer>
    </article>
  );
};
export default CardPhrase;
