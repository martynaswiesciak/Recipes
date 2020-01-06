import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class AddRecipe extends Component {
    render() {
        return ( 
        <Form>
        <Form.Group widths='equal'>
          <Form.Input 
            fluid label = 'Tytuł przepisu' 
            placeholder = 'Wpisz tytuł'
          />
          <Form.Input 
            fluid label='Opis' 
            placeholder='Opis'
          />
          <Form.Input 
            fluid label='Dodaj składnik' 
            placeholder='Wpisz składnik'
          />
        </Form.Group>

        <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Dodaj'
        />
        </Form>
        )
    }
}

export default AddRecipe;