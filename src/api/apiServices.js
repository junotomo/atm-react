const withdrawApiUrl = process.env.REACT_APP_PUBLIC_WITHDRAWL
const balanceApiUrl = process.env.REACT_APP_PUBLIC_BALANCE_URL
const atmDataApiUrl = process.env.REACT_APP_PUBLIC_ATM_NOTES_NUMBER

export const getBalance = async () => {
    try {
        const response = await fetch(balanceApiUrl)
        const newBalance = await response.json()

        return newBalance
    } catch (error) {
        console.log(error)
    }
}

export const getAtmData = async () => {
    try {
        const response = await fetch(atmDataApiUrl)
        const fetchObj = await response.json()

        return fetchObj["number of notes"]
    } catch (error) {
        console.log(error)
    }
}

export const initScreenBalanceAndAtmBills = async () => {
    try {
        const newBalance = await getBalance()
        const initAtmBills = await getAtmData()
        const initBalance = newBalance.balance

        return {initAtmBills,initBalance}
    } catch (error) {
        console.log(error)
    }
}

export const withdrawMoney = async (withdrawAmount)=> {
    try {
        const response = await fetch(withdrawApiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pin: 777,
                    amount: withdrawAmount
                })
            })
         const updateData= await response.json()

         return updateData
    } catch (error) {
        console.log(error)
        alert("Valor inválido")
    }
}

