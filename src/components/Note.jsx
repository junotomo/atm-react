export const Note = (props) => {

    const noteImg = {
        "10_reais": 10,
        "20_reais": 20,
        "50_reais": 50,
        "100_reais": 100,
    }

    let noteImage = ""
    const noteImgArray = Object.entries(noteImg)

    for (const noteValue of noteImgArray) {
        if (noteValue[1] == props.notetype) noteImage = noteValue[0]
    }

    return (            
        <div className="card">              
           <div className="money-qtd"> x {props.quantity}   </div>
           <img className="note-img" src={require("../../src/assets/"+noteImage+".png")} alt="" />
        </div>
    )
}
