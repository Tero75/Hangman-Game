const ShowDrawing = ({HangmanImages,drawingIndex}) => {
    //console.log(HangmanImages[drawingIndex].ALT)
    return (
        <div>
            <img src={HangmanImages[drawingIndex].SRC} alt={HangmanImages[drawingIndex].ALT}/>
        </div>
    )
}
export default ShowDrawing;