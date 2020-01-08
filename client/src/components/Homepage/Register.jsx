import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';

class Register extends Component {
  state = { nickname: '', password: '', confirmPassword: '', firstName: '', lastName: '', email: '' };
  passwordCheckValue = null;

  passwordCheck() {
    const { password, confirmPassword} = this.state;
    
    if(password !== confirmPassword) {
      this.passwordCheckValue = "password don't match!";
    } else {
      this.passwordCheckValue = null;
    }
  }

  render() {
    console.log(this.state);
    this.passwordCheck();
      return (
        <Form>
          <Form.Group widths='equal'>
            <Form.Input 
              icon="user"
              iconPosition="left"
              fluid label='Nickname' 
              placeholder='Nickname' 
              type="text"
              value={this.state.nickname}
              onChange={e => {this.setState({ nickname: e.target.value })}}
              required 
            />
            <Form.Input 
              icon="lock"
              iconPosition="left"
              fluid label='Password' 
              placeholder='Password' 
              type="password" 
              value={this.state.password}
              onChange={e => {this.setState({ password: e.target.value })}}
              required 
              error={this.passwordCheckValue}
            />
            <Form.Input 
              icon="lock"
              iconPosition="left"
              fluid label='Confirm Password' 
              placeholder='ConfirmPassword' 
              type="password" 
              value={this.state.confirmPassword}
              onChange={e => {this.setState({ confirmPassword: e.target.value })}}
              required 
              error={this.passwordCheckValue}
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Input 
              fluid label='First name' 
              placeholder='First name' 
              value={this.state.firstName}
              onChange={e => {this.setState({ firstName: e.target.value })}}
            />
            <Form.Input 
              fluid label='Last name' 
              placeholder='Last name' 
              value={this.state.lastName}
              onChange={e => {this.setState({ lastName: e.target.value })}}
            />
          </Form.Group>

          <Form.Field
              icon="at"
              iconPosition="left"
              id='form-input-control-error-email'
              control={Input}
              label='Email'
              placeholder="email"
              value={this.state.email}
              onChange={e => {this.setState({ email: e.target.value })}}
              required
          />
          
          <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Register'
          />
        </Form>
      )
    }
  }

export default Register;