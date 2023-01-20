const ShowDrawing = ({HangmanImages,drawingIndex}) => {

    return (
        <div>
            <img src={HangmanImages[drawingIndex]}/>
        </div>
    )
}
export default ShowDrawing;