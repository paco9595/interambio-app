import React, { Component } from "react";
import { LoginContainer, Form } from './../styles'
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
export class LoginForm extends Component {
    state = {
        user: '',
        password: ''
    }
    handleChange = event =>{
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmition = event =>{
        event.stopPropagation();
        event.preventDefault();
        console.log(event)
    }
    render(){
        return(
            <LoginContainer>
                <Form onSubmit={this.handleSubmition}>
                    <h2>Login</h2>
                    <FormGroup>
                        <ControlLabel>User</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="User"
                            name="user"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.value}
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <button type="submit">Login</button>
                </Form>
            </LoginContainer>
        )
    }
}