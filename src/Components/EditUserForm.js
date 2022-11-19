import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditUserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id
        }
    }
    handleChange = (e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            name: "",
            email: "",
            gen: "",
        })
        this.props.closeModal()
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name"
            value={this.state.name} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" 
            name="email"
            value={this.state.email} onChange={this.handleChange} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" placeholder="Enter Gen" name="gen" 
            value={this.state.gen} onChange={this.handleChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditUserForm;
