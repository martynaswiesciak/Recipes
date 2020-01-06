import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class AddRecipe extends Component {
    render() {
        return ( 
        <Form>
        <Form.Group widths='equal'>
          <Form.Input 
            fluid label = 'Recipe title' 
            placeholder = 'Enter title'
            required
          />
          <Form.Input 
            fluid label='Description' 
            placeholder='Description'
            required
          />
          <Form.Input 
            fluid label='Add ingredient' 
            placeholder='Enter Ingredient'
            required
          />
        </Form.Group>

        <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
        />
        </Form>
        )
    }
}

export default AddRecipe;