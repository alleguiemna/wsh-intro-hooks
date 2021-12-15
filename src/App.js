
import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [isShow, setIsShow] = useState(false)
  const handleShow = () =>{
    setIsShow(!isShow)
  }
  return (
    <div className="App" style={{textAlign:"center",marginTop:"20px"}}>
     <button onClick={()=>handleShow()}>{isShow ? "Hide" : "Show"}</button>
     {isShow ? <Counter /> : null}
    </div>
  );
}

export default App;
