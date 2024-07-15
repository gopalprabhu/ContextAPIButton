import React, { useContext } from "react";
import { Context } from "../App";
import './Btn.css'


function Btn() {
    const[signedIn, setSignedIn] = useContext(Context);
  return (
    <div>
      <button className="btn" onClick={()=>setSignedIn(!signedIn)}
      >
        {signedIn ? 'Sign In': 'Sign Out'  } 
      </button>
    </div>
  );    
}
export default Btn;
