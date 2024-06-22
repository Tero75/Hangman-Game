const Keyboard = ({CharacterPressed}) => {
    let FI_SWE = ["q","w","e","r","t","y","u","i","o","p","å","a","s","d","f","g","h","j","k","l","ö","ä","z","x","c","v","b","n","m"]      
    let keyboardButtons = FI_SWE.map(char => <button id={"button_"+ char} key={char} onClick={CharacterPressed.bind(this, char)}>{char}</button>);

    return (
        <div>
         {keyboardButtons} 
        </div>
    );
}
export default Keyboard;