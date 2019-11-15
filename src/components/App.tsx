import React from 'react';
import TextField from './TextField';

//propos
//hooks
// renders props


const App: React.FC = () =>{
  return <div>
    <div>Teste React com Typescript</div>
    <TextField text='Teste' person={{firstName: '', lastName: ''}} />
  </div>
}

export default App;
