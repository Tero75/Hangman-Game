import ShowDrawing from './ShowDrawing'
import ShowWord from './ShowWord'
import Keyboard from './Keyboard'
import RandomWords from './data/RandomWords.json'
import HangmanImages from './data/HangmanImages.json'
import { useState, useEffect} from 'react';

const Main = () => {
    /*useStates----------------------------------------------------------*/
    const [toGuessChars,settoGuessChars] = useState([]);
    const [guessedChars,setguessedChars] = useState([]);
    const [wrongGuessCount,setwrongGuessCount] = useState(null);
    const [showElement,setShowElement] = useState(null);
    const [counter, setCounter] = useState(1); 
    const [winner, setWinner] = useState(false);
    /*variables-----------------------------------------------------------*/
    let title = "Hangman Word Guessing Game";  
    
    const InitGame = ()=>{
        settoGuessChars(Array.from(RandomWords[Math.floor(Math.random() * RandomWords.length)].toLowerCase()));
        setShowElement(null);
        setWinner(false);
        setwrongGuessCount(0);
        setCounter(1);
        setguessedChars([]);
    }
    
    const CharacterPressed = (userPressedChar) => {
        document.getElementById("button_" + userPressedChar).disabled = true;        
        setguessedChars(guessedChars+userPressedChar); 
        CheckGuess(userPressedChar);
    }
    
    const CheckGuess = (userGuess) => {
        const characterCount = new Set(toGuessChars).size;//individual characters count from toGUessChars array


        if(counter===characterCount){
            setWinner(true);
        } else if(toGuessChars.includes(userGuess))/*returns true or false*/ {
            setCounter(counter+1)
        } else {
            setwrongGuessCount(wrongGuessCount+1);         
            setShowElement(<ShowDrawing drawingIndex={wrongGuessCount} HangmanImages={HangmanImages}/>);
        }        
    }    

    useEffect( () => {        
        console.log("Page has loaded");
        InitGame();
    },[]);
   
    return (
    <div>
        <h1>{title}</h1>
        {showElement}        
        <ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars}/>
        {(wrongGuessCount < HangmanImages.length && winner === false)?<Keyboard CharacterPressed={CharacterPressed}/>
        :<button className="resetButton" onClick={InitGame}>Play Again!</button>}
    </div>
    );
}
export default Main;