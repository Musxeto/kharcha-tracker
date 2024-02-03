import React from 'react';
import Header from './Components/Header';
import './App.css'; 
import TransactionList from './Components/TransactionList';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';


const MyApp = () => {
  return (
    <GlobalProvider>
      <Header title="Kharcha Tracker" />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default MyApp; 
