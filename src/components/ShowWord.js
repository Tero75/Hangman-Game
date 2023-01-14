const ShowWord = (props) => {  
    

    let SecretWord = props.toGuessChars.map((letter) => (props.guessedChars.includes(letter)? letter: "*"));
    
    return (
        <div key={SecretWord.join("")}>
            <h1>{SecretWord}</h1>
        </div>
    );
}
export default ShowWord;