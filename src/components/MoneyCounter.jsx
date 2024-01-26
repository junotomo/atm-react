
export const MoneyCounter = (props) => {
    const  noteImg = {
        "10": "10_reais",
        "20": "20_reais",
        "50": "50_reais",
        "100": "100_reais",
        
    } 
    const noteImgArray = Object.entries(noteImg)
    const atmBillsDataArray = Object.entries(props.atmBillsData)
    let newCashNumber = []    

    if (Object.keys(props.atmBillsData).length === 0) {
        return <div>Loading...</div>
    } else {
        newCashNumber = noteImgArray.map((image, index) => {
            if(image[0] === atmBillsDataArray[index][0]) return [image[1], atmBillsDataArray[index][1]]
            }   
        ) 
        return(
            <div className="money-counter">
                {(props.atmBillsData != {} &&(
                    <div className="counter-card">     
                        {newCashNumber.map((note, index) => (
                            <div className="counter-card" key={index}>         
                                <div className="money-qtd">  Quantidade: {note[1]}  </div>
                                <img className="cash-img" src={require("../../src/assets/"+note[0]+".png")} alt="" />
                            </div>            
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

