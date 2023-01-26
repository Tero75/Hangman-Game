import ShowDrawing from './ShowDrawing'
import ShowWord from './ShowWord'
import Keyboard from './Keyboard'
import UserInterface from './UserInterface'
import RandomWords from './data/RandomWords.json'
import HangmanImages from './data/HangmanImages.json'
import { useState, useEffect, useId } from 'react';

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
        settoGuessChars(Array.from(RandomWords[Math.floor(Math.random() * RandomWords.length)]));
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
        const characterCount = toGuessChars.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()).size;

        if(counter===characterCount){
            setWinner(true);
        } else if(toGuessChars.includes(userGuess))/*returns true or false*/ {
            setCounter(counter+1)
        } else {
            setwrongGuessCount(wrongGuessCount+1);         
            setShowElement(<ShowDrawing drawingIndex={wrongGuessCount} HangmanImages={HangmanImages}/>)
        }        
    }
    

    useEffect( () => {
        
        console.log("Page has loaded");
        InitGame();
    },[]);

    if(wrongGuessCount < HangmanImages.length & winner===false)
    {return (
        <UserInterface title={title} showElement={showElement} ShowWord={<ShowWord toGuessChars={toGuessChars} guessedChars={guessedChars}/>} Keyboard={<Keyboard CharacterPressed={CharacterPressed}/>}/>

    )}
    else if(wrongGuessCount === HangmanImages.length){
        return(        
            <UserInterface title={title} showElement={showElement} text={<h1>LOOSER!!!!</h1>} button={<button className='resetButton' onClick={InitGame}>Play Again!</button>} />
        )
    }
    else {
        return(
            <UserInterface  showElement={showElement}  text={<h1>WINNER!!!!</h1>} button={<button className='resetButton' onClick={InitGame}>Play Again!</button>} />
        )
    }
}
export default Main;