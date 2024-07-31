import React, { useState } from 'react'

export default function TextForm(props) {

    // Fucntion to toggle text to upper case or lower case
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleDwClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    // Function to extract emails from the text
    const emailExtracter = () => {
        let textArr = text.split(" ")
        let allEmails = ""
        textArr.forEach((email) => {
            if (email.includes("@") && email.includes(".com")) {
                allEmails = allEmails + email + ",  "
            }
        })
        setEmail(allEmails)
    }

    // Function to clear all texts
    const clearText = () => {
        let newText = ""
        setText(newText)
        setEmail(newText)
    }

    // Function to toggle between two states
    const handleClick = () => {
        if (toggle) {
            handleUpClick()
        } else {
            handleDwClick()
        }
        setToggle(!toggle) // changing the toggle every time it is clicked
    }

    // function to copy all the text in the text area
    const handleCopy = () => {
        let textElement = document.getElementById("myBox")
        textElement.select()
        navigator.clipboard.writeText(textElement.value)

    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    // this is to handle any change in our text area, without this we can't type in out text area.
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // States
    const [text, setText] = useState("")
    const [toggle, setToggle] = useState(true)
    const [email, setEmail] = useState("")

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Toggle text case</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear all</button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>
                <button className="btn btn-primary" onClick={emailExtracter}>Extract e-mails</button>
            </div>

            <div className="container">
                <h1>Your Text Summary</h1>
                <p><b>{text.split(" ").length}</b> Words, and <b>{text.length}</b> character</p>
                <p>{0.0008 * text.split(" ").length} minuits to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                <br />
                <h2>All the e-mails extracted from the text</h2>
                <p>{email}</p>
            </div>
        </>


    )
}