import React, { Component } from 'react';
import { Menu, Input, Select, TextArea, Button, Checkbox, Form } from 'semantic-ui-react';

class Login extends Component {
render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input 
            icon="user"
            iconPosition="left"
            fluid label='Nickname' 
            placeholder='Nickname' 
            required 
          />
          <Form.Input 
            icon="lock"
            iconPosition="left"
            fluid label='Password' 
            placeholder='Password' 
            type="password" 
            required 
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input 
            fluid label='First name' 
            placeholder='First name' 
          />
          <Form.Input 
            fluid label='Last name' 
            placeholder='Last name' 
          />
        </Form.Group>

        <Form.Field
            icon="at"
            iconPosition="left"
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder="email"
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

export default Login;