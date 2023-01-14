const GameArea = (props) => {
    
    console.log(props.text)
    return (
        <div className="">
            <div className="game row">
                <div className="infobox col-2">                
                        Try to guess the word!        
                </div>
                <div className="GameBox col-8">
                    <div className="titleBox row">
                        <h1>{props.title}</h1>
                    </div>                    
                    <div className="imageBox row">
                        {props.showElement}
                        {props.text}
                        {props.ShowWord}
                        {props.Keyboard}
                        {props.button}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameArea;