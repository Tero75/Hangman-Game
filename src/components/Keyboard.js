const Keyboard = ({CharacterPressed}) => {
    
    let keyboardLetters = ['Q','W','E','R','T','Y','U','I','O','P','Å','A','S','D','F','G','H','J','K','L','Ö','Ä','Z','X','C','V','B','N','M'];
    let keyboardButtons = keyboardLetters.map(char => <button id={"button_"+ char} key={char} onClick={CharacterPressed.bind(this, char)}>{char}</button>);
    return (
        <div>
         {keyboardButtons} 
        </div>
    );
}
export default Keyboard;