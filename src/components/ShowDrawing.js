const ShowDrawing = ({HangmanImages,drawingIndex}) => {

    return (
        <div>
            <img src={HangmanImages[drawingIndex]} alt=''/>
        </div>
    )
}
export default ShowDrawing;