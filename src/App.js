
import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

export const Context = React.createContext();

function App() {
  const[signedIn, setSignedIn] = useState(false);
  return (

    <Context.Provider  value ={[signedIn, setSignedIn]} >
      <div className="App">
     <NavBar/>
     <h1>{signedIn ? 'Signed Out': 'Signed In'  } </h1>
     </div>
    </Context.Provider>
  );
}

export default App;
