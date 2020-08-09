import React from 'react';
import ContractForm from './containers/ContractForm'
function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="p-6 bg-teal-900 w-full">
        <h1 className="text-white text-xl">Smart Contract</h1>
      </div>
      <ContractForm />
    </div>
  );
}

export default App;
