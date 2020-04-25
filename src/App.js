import React, { Component } from "react";
import uuid from "./uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoInput from "./components/TodoList";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up",
      },
      {
        id: 2,
        title: "make breakfats",
      },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) =>{
    console.log("handle change")
  }

  handleSubmit = (e) =>{
    console.log("handle submit")
  }
  clearList = () =>{
    console.log("clear list")
  }

  handleDelete = (id) =>{
    console.log('handle id  ${id}')
  }

  handleEdit = (e) =>{
    console.log("handle edit")
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              Todo Input
            </h3>
          <TodoInput item={this.state.item} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} editItem = {this.state.editItem}/>
          <TodoList item={this.state.item} clearList = {this.clearList}
          handleDelete={this.handleDelete} handleEdit = {this.handleEdit}/>
          </div>
        
          </div>
          </div>
            
          
      </div>
    );
  }
}
