import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card"
import Input from "./components/Input"

class CarSystem extends Component{
  state = {
    cars: [
      {id: 1,  name: "Corolla", brand: "Toyota",   color: "Black"},
      {id: 2,  name: "Prius",   brand: "Toyota",   color: "White"},
      {id: 3,  name: "Crown",   brand: "Toyota",   color:"Grey"},
      {id: 4,  name: "GTR",     brand: "Nissan",   color: "Blue"},
      {id: 5,  name: "P100",    brand: "Tesla",    color: "Black"},
      {id: 6,  name: "Demon",   brand: "Dodge",    color: "White"},
      {id: 7,  name: "AMG",     brand: "Mercedes", color: "Grey"},
      {id: 8,  name: "Charger", brand: "Dodge",    color: "Blue"},
      {id: 9,  name: "75710",   brand: "Belaz",    color: "Yellow with a hint of Blue"},
      {id: 10, name: "Ram300",  brand: "Ford",     color: "Black"}
    ]
  }

  showAllCards = () => {
    const carList = [...this.state.cars];
    return (
      carList.map(car => {
        return(
          <Card 
            id={car.id}
            name={car.name}
            brand={car.brand}
            color={car.color}
          />
        )
      })
    )
  }

  render() {
    return (
      <div className="container">
        <Input
        idForm="carColor"
        inputName="carColor"
        labelText="Enter color:"
        placeholderInput="Car color"
        inputType="text"
        buttonText="Submit"
        />

        {this.showAllCards()}
      </div>
    );
  }
}

export default CarSystem;
