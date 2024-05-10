import React, {useState} from 'react';

export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase button is trigerred","success")
    }

    const handleLoClick = () => {
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase button is trigerred","success")
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);

    }

    const handleClearClick = (event) => {
        //console.log("On Change");
        let newText = "";
        setText(newText);
        props.showAlert("Clear Text button is trigerred","success")
    }

    

  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'?'white':'black'}}   >
        <h1>{props.heading}</h1>    
        <div className="mb-3">
        <textarea className="form-control" onChange = {handleOnChange} value = {text} id="myBox" rows="8" style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick = {handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-2" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} Words,  {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    );
}
