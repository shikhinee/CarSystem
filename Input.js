import React from 'react'
import "./Input.css"

const Input = (props) => {
    return (
        <div className="form-container">
            <form id={props.idForm}>
                <label for={props.inputName}>{props.labelText}</label>
                <input type={props.inputType} name={props.inputName} placeholder={props.placeholderInput} form={props.idForm}/>
                <button type="button" value="Submit" form={props.idForm}>{props.buttonText}</button>
            </form>
        </div>
    )
}

export default Input