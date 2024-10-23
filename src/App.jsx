import { useState } from 'react';

import Header from './Header'
import Input from './Input'
import Results from './Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
}
  return (
    <body>
      <Header/>
      <Input userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter a duration greater tahn zero.</p>}
      {inputIsValid && <Results input={userInput} />}
      </body>
  )
};

export default App;
