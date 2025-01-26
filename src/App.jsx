import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'
import Transactions_List from './Components/Transactions_List '
import Form from './Components/Form'
import { GlobalProvider } from './Components/GlobalState'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <Transactions_List/>
      <Form/>
    </div>
   </GlobalProvider>
  )
}

export default App
