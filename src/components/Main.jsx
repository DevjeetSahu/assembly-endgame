import { useState } from "react";
import Confetti from "react-confetti"
import { languages } from "./languages";
import { getFarewellText } from "./utils";
import { getRandomWord } from "./words";
export default function Main() {
  
  const [word, setWord] = useState(()=>getRandomWord());
  const letterArray = word.split("");
  const [guessLetters, setGuessLetters] = useState([]);

  const wrongGuesses = guessLetters.filter(
    (letter) => !word.includes(letter)
  ).length;

  const isGameWon = word
    .split("")
    .every((letter) => guessLetters.includes(letter));
  const isGameLost = wrongGuesses >= languages.length - 1 ? true : false;
  const isGameover = isGameLost || isGameWon;

  function typing(letter) {
    setGuessLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }
  const languageElements = languages.map((language, idx) => {
    const isLanguageLost = idx < wrongGuesses;
    return (
      <span
        className={`langelement ${isLanguageLost ? "lost" : ""}`}
        key={language.name}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
        }}
      >
        {language.name}
      </span>
    );
  });

  const wordElements = letterArray.map((letter, idx) => (
    <div
      key={idx}
      style={{
        color: (isGameLost && !guessLetters.includes(letter)) ? "#BA2A2A" : "#f9f4da",
        padding: "20px",
        fontWeight: "bold",
        margin: "4px",
        borderRadius: "2px",
        fontSize: "1.5rem",
        backgroundColor: "#323232",
        borderBottom: "1px solid #F9F4DA",
      }}
    >
      <span>{(isGameLost || guessLetters.includes(letter)) ? letter.toUpperCase() : ""}</span>
    </div>
  ));

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboards = alphabets.split("");

  const keyboardElements = keyboards.map((letter, idx) => {
    const isGuessed = guessLetters.includes(letter);
    const isCorrect = isGuessed && word.includes(letter);
    return (
      <button
        key={idx}
        disabled={isGameover}
        style={{
          backgroundColor: isGuessed
            ? isCorrect
              ? "#10A95B"
              : "#EC5D49"
            : "#FCBA29",
          border: "solid 1px #d7d7d7",
          fontSize: "1.5rem",
          color: "#1e1e1e",
          opacity: isGameover?"0.6":"1",
          cursor: isGameover ? "not-allowed" : "pointer",
          padding: "15px",
          fontWeight: "bold",
          borderRadius: "5px",
          height: "60px",
          width: "60px",
          alignItems: "center",
        }}
        onClick={() => typing(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const lastLetter = guessLetters[guessLetters.length - 1];
  const isLastIncorrect = lastLetter && !word.includes(lastLetter);

  function startGame(){
    setWord(getRandomWord())
    setGuessLetters([])
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000}/>}
      <header>
        <h2>Assembly: Endgame</h2>
        <p className="ins">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <div
        className={isGameover ? (isGameWon ? "correct" : "wrong") : (isLastIncorrect? "neutral": "")}
      >
        <h3>{isGameover ? (isGameWon ? "You Won!" : "Game Over!") : null}</h3>
        <p>
          {isGameover
            ? isGameWon
              ? "Well done! 🎉"
              : "You lose! Better start learning Assembly 😭"
            : isLastIncorrect
                ? getFarewellText(languages[wrongGuesses-1].name)
                : null
          }
        </p>
      </div>
      <div className="lang">{languageElements}</div>
      <div className="word">{wordElements}</div>
      <div className="keyboard">{keyboardElements}</div>
      {isGameover ? <button className="newgame" 
      onClick={()=>startGame()}>New Game</button> : null}
    </main>
  );
}
