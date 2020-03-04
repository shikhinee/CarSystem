import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="Card">
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Brand: {props.brand}</p>
            <p>Color: {props.color}</p>
        </div>
    )
}

export default Card