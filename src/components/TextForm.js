import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    
    const handleDwClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClick = ()=> {
        if(toggle){
            handleUpClick()
        }else {
            handleDwClick()
        }
        setToggle(!toggle) // changing the toggle every time it is clicked
    }
    

    const handleOnChange = (event)=> {
        setText(event.target.value)
    }

    // States
    const [text, setText] = useState("")
    const [toggle, setToggle] = useState(true)
    
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Convirt to Uppercase</button>
                {/* <button className="btn btn-primary" onClick={handleDwClick}>Convirt to Lowercase</button> */}
            </div>

            <div className="container">
                <h1>Your Text Summary</h1>
                <p><b>{text.split(" ").length}</b> Words, and <b>{text.length}</b> character</p>
                <p>{0.0008 * text.split(" ").length} minuits to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
        

    )
}