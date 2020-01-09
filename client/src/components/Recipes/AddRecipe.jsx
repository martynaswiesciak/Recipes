import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

class AddRecipe extends Component {
  state = {recipeTitle:'', description: '', addIngredient: ''};

    render() {
      console.log(this.state);
        return ( 
        <Segment Group>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input 
            fluid label = 'Recipe title' 
            placeholder = 'Enter title'
            icon="bars"
            iconPosition="left"
            value = {this.state.recipeTitle}
            onChange={e => {this.setState({ recipeTitle: e.target.value })}}
            required
          />
          <Form.Input 
            fluid label='Add ingredient' 
            placeholder='Enter Ingredient'
            icon="plus"
            iconPosition="left"
            value = {this.state.addIngredient}
            onChange = {e => {this.setState({ addIngredient: e.target.value })}}
            required
          />
          
        </Form.Group>

        <Form.TextArea
            fluid label='Description' 
            placeholder='Your description'
            icon="bars"
            iconPosition="left"
            value = {this.state.description}
            onChange = {e => {this.setState({ description: e.target.value })}}
            required
          />

        <Form.Field
            id='form-button-control-public'
            icon="plus"
            iconPosition="left"
            control={Button}
            content='Submit'
            onClick={() => this.setState({ recipeTitle: '', description: '', addIngredient: ''})}
        />
        </Form>
        </Segment>
        )
    }
}

export default AddRecipe;