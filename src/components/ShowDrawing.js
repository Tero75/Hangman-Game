const ShowDrawing = (props) => {

    return (
        <div>
            <img src={props.HangmanImages[props.drawingIndex]}/>
        </div>
    )
}
export default ShowDrawing;