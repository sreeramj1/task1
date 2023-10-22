import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  const handleOnChange =(event)=>{
    setText(event.target.value)
  }
  return (
    <>
    <center>
        <div className="container-fluid">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title  text-center"><b>Responsive paragraph word counter</b></h2>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value ={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="3"></textarea>
                    <p>Word Count: - {text.split(" ").length}</p>
                </div>
            </div>
        </div>
    </center>
    </>
  );
}

export default App;
