import React from "react";
import { useState } from "react";
import "../Index.css"

function App() {
  const data = [
    { name: "Leopold Loggl", img: "leopold_loggle.png" },
    { name: "Sprig Plantar", img: "sprig_plantar.png" },
    { name: "Maddie Flour", img: "maddie.png" },
    { name: "Anne Boonchuy", img: "anne_boonchuy.png" },
    { name: "Wally", img: "wally.png" },
    { name: "Hop Pop Plantar", img: "hop_pop_plantar.png" },
    { name: "Polly Plantar", img: "polly_plantar.png" },
    { name: "Mayor Toadstool", img: "mayor_toadstool.png" },
    { name: "Captain Grime", img: "captain_grime.png" },
    { name: "Sasha", img: "sasha.png" },
    { name: "Sylvia Sundew", img: "sylvia_sundew.png" },
    { name: "Sadie Croaker", img: "sadie_croaker.png" },
  ];

  // state
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCard, setClickedCard] = useState([]);
  const [cards, setCards] = useState(data);
  function shuffleCards(arr) {
    const shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
  function handleOnClick(name) {
    if (clickedCard.includes(name)) {
      alert("Match loss");

      setBestScore((preveScore) => (score > preveScore ? score : preveScore));

      setScore(0);
      setClickedCard([]);

      setCards(shuffleCards(cards)); // shuffle

      return;
    }

    const newScore = score + 1;

    setScore(newScore);

    setClickedCard([...clickedCard, name]);

    if (newScore === cards.length) {
      alert("congratulation You win");

      setBestScore(cards.length);

      setScore(0);
      setClickedCard([]);
    }

    setCards(shuffleCards(cards)); // shuffle after click
  }

  return (
    <div className="container-fluid text-center">
      {/* Header */}
      <div className="row">
        <div className="col-6">
          <h1>Amphibia Memory Game</h1>
        </div>

        <div className="col-6 d-flex flex-column">
          <h6 className="text-end">Score : {score}</h6>
          <h6 className="text-end">Best Score : {bestScore}</h6>
        </div>
      </div>

      <div className="row">
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>

      {/* Cards */}
      <div className="row">
        {cards.map((d, index) => (
          <div className="col" key={index}>
            <div className="card" style={{ cursor: "pointer" }} onClick={() => handleOnClick(d.name)}>
              <img src={d.img} className="card-img-top" alt={d.name} />

              <span>
                <strong>{d.name}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
