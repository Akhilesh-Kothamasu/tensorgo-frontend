import React from 'react';
import InvoiceList from './components/InvoiceList';
import LoginButton from './components/loginButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Invoice Management System</h1>
      </header>
      <main>
        <LoginButton />
        <InvoiceList />
      </main>
    </div>
  );
}

export default App;
