import KeyboardKeys from './data/KeyboardKeys.json'
const Keyboard = ({CharacterPressed}) => {
            
    let keyboardButtons = KeyboardKeys.FI_SWE.map(char => <button id={"button_"+ char} key={char} onClick={CharacterPressed.bind(this, char)}>{char}</button>);

    return (
        <div>
         {keyboardButtons} 
        </div>
    );
}
export default Keyboard;