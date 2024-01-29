import './App.css'
import {MoneyCounter} from './components/MoneyCounter'
import { useState, useEffect } from 'react'
import { initScreenBalanceAndAtmBills, withdrawMoney} from './api/apiServices'
import { Note } from './components/Note'

function App() {
  const [withdrawAmount,setWithdrawAmount] = useState(Number)
  const [accountData,setAccountData] = useState(Number)
  const [cashReceived,setcashReceived] = useState({})
  const [initialBills,setinitialBills] = useState({})

  const handleClik = async () => {
    let response = await withdrawMoney(withdrawAmount)
    setcashReceived(response.receividNotes)
    setinitialBills(response.newCashQtd)
    setAccountData(response.newBalance)
  }

  const initScreen = async () => {
    try{
      const response = await initScreenBalanceAndAtmBills()
      setAccountData(response.initBalance)
      setinitialBills(response.initAtmBills)
    }catch(e){
        console.log(e)
    }
  }

  useEffect(() => {
    initScreen()
  },[])
    

  return (
    <div className="app">
      <div className="atm-interface">
        
        <div className="atm-screen">
            <h1>Saldo atual :</h1>
            <h2>{accountData} </h2>   
        </div>

        <div className="withdraw-area">
          <input type="number" onChange={event => setWithdrawAmount(event.target.value)}/>
        </div>      

        <div className="withdraw-button-area">
            <button className="withdraw-btn" onClick={() => handleClik()}>saque</button>
        </div>

        <div className="withdraw-money">
            {Object.entries(cashReceived).map((key, index) => (
                <div className="notes-img" key={index}>
                    {(key[1] !== 0) && (
                      <Note quantity={key[1]} notetype={key[0]}/>
                    )}
                </div>
            ))}
        </div>
      </div>

      <MoneyCounter atmBillsData={initialBills} />

    </div>
  )
}

export default App
