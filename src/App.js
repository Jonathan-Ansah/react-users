 import  logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import Users from "./Components/Users";
import User from "./Components/User";
import AddUserForm from "./Components/AddUserForm";





class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      users:[
        {
          name:"Kobby Jones",
          email:"kobb1@email.com",
          gen: 1,
          id: "jank1"
        },
        {
          name:"Jon Clev",
          email:"clev@email.com",
          gen: 2,
          id: "jec3"
        },
        {
          name:"Jessy Asa",
          email:"jess@email.com",
          gen: 3,
          id:"alaska0"
        },
       
      ]
    }
  }
  addNewUser = (user)=>{
    user.id= Math.random().toString()
    this.setState({
      users:[...this.state.users, user]
    })
  }
  deleteUser=(id)=>{
    let undeletedUsers=this.state.users.filter(user=> user.id !== id )
    this.setState({
      users: undeletedUsers
    })
  }
  editUser=(id, updateUser)=>{
    this.setState({
      users: this.state.users.map(user  => user.id === id ? updateUser : user)
    })
  }
  render(){
  return (
      <>
        <Container fluid style={{marginTop : "2rem"}}>
        <Row>
          <Col md="4">
            <AddUserForm addUser={this.addNewUser}/>
          </Col>
          <Col>
            <Users usersData = {this.state.users} 
            deleteUser= {this.deleteUser}
            editUser={this.editUser}/>
          </Col>
        </Row>
      </Container>
     </>
    
  );
  }
}

export default App;
