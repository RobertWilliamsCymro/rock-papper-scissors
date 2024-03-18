import { useState } from "react";

export default function Home() {

  const [score, setScore] = useState(0);
  // this is a function that will be called when the button is clicked
  // it will: take the value I select, then select a random value, either "rock", "scissors" or "paper"
  // if I select "rock" and the random value is "scissors" I win a point, if the random value is "paper" I lose a point

  function CalculateScore(selectedValue: string) {
    // variable to
    const randomValues = ["rock", "paper", "scissors"];
    const randomValue = randomValues[Math.floor(Math.random() * randomValues.length)];

    if (selectedValue === "rock" && randomValue === "rock") {
      console.log("It's a tie");
    }
    if (selectedValue === "paper" && randomValue === "rock") {
      console.log("You win!");
      setScore(score + 1);
      console.log(score);
    }
    if (randomValue === "paper" && selectedValue === "rock") {
      console.log("You lose");
      setScore(score - 1);
    }

    if (selectedValue === "paper" && randomValue === "paper") {
      console.log("It's a tie");
    }

    if (selectedValue === "rock" && randomValue === "paper") {
      console.log("You win!");
      setScore(score + 1);
      console.log(score);
    }

    if (randomValue === "scissors" && selectedValue === "paper") {
      console.log("You lose");
      setScore(score - 1);
    }

    if (selectedValue === "scissors" && randomValue === "paper") 
    {
      console.log("You win!");
      setScore(score + 1);
      console.log(score);
    }

    if (selectedValue === "rock" && randomValue === "scissors") {
      console.log("You lose!");
      setScore(score - 1);
      console.log(score);
    }
    
    if (randomValue === "scissors" && selectedValue === "scissors") {
      console.log("It's a tie");

    }

  }

  return (
    <>
      {/* Write basic javascript code */}
      <p className="text-white">{score}</p>
      <button value="rock" className="text-white" onClick={() => CalculateScore("rock")}>
        Rock
      </button><br />
      <button value="scissors" className="text-white" onClick={() => CalculateScore("scissors")}>
        Scissors
      </button><br />
      <button value="paper" className="text-white" onClick={() => CalculateScore("paper")}>
        Paper
      </button>
    </>
  )
}