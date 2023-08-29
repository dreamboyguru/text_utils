import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newSet = text.toUpperCase();
        setText(newSet);
        props.setAlert("Converted to Upper-case","success");
    }
    const handleLwrClick = ()=>{
        let newSet = text.toLowerCase();
        setText(newSet);
        props.setAlert("Converted to Lower-case","success");
    }
    const handleClearClick = ()=>{
        let newSet = "";
        setText(newSet);
        props.setAlert("Cleared","success");
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        try {
            navigator.clipboard.writeText(text.value);
            props.setAlert("Copied","success");
        } catch (err) {
            props.setAlert("not Copied","warning");
        }
        
    }
    const handleSpaceClick = ()=>{
        let newSet = text.split(/[  ]+/);
        setText(newSet.join(' '));
        props.setAlert("Extra space removed","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here');
    return (
        <>
        <div className={`text-${props.mode==="light"?"dark":"light"}`}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className={`form-control`} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>convet to uppert case</button>
            <button className='btn btn-primary mx-2' onClick={handleLwrClick}>convet to uppert case</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear textarea</button>
            <button className='btn btn-primary mx-2' onClick={handleSpaceClick}>Remove extra space</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyClick}>copy text</button>
        </div>
        <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
            <h1>Display the word and letter</h1>
            <p>{text.split(" ").length} Words {text.length} letters</p>
            <p>{0.008 * text.split(" ").length} minute for read this paragraph</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview here'}</p>
        </div>
        </>
    )
}
