import { useEffect, useState } from 'react'


const Game = () => {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState("")
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value:string):void => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = ():void => {
    const randomChoice = choices[Math.floor(Math.random() * 3)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    setUserChoice("");
    setComputerChoice("");
    setComputerPoints(0);
    setUserPoints(0);
    setTurnResult("");
    setResult('Let\'s see who wins');
    setGameOver(false);
    
    }

    
     useEffect(() => {
         if (userPoints <= 4 && computerPoints <= 4) {
          
             if (( userChoice=== "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper") ||
                (userChoice === "rock" && computerChoice === "scissors")
                ){
            // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        
              if (updatedUserPoints === 5) {
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
         if (( computerChoice=== "paper" && userChoice === "rock") ||
            (computerChoice === "scissors" && userChoice  === "paper") ||
            (computerChoice === "rock" && userChoice === "scissors")){
      
            // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        
             if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (userChoice===computerChoice) {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
        <h1> </h1>
        {choices.map((choice, index) =>
          <button className='transition ease-in-out delay-150 bg-teal-500 hover: -translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  text-white font-bold py-2 px-4 m-2 rounded '
            key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
           { choice } 
          </button>
      )}

        <div >
          you Chose : {userChoice} </div>
        <div>  Computer Chose: {computerChoice}</div>
              <h1>Turn Result: {turnResult} </h1> 
               
        <h1>Final Result: {result}</h1>
        
      
      <div >
        {gameOver && 
          <button  onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default Game;