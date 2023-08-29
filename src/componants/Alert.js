import React from 'react'

export default function Alert(props) {
    const capitalized = (word)=>{
        // const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.Alert.type)}: </strong> {props.Alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
