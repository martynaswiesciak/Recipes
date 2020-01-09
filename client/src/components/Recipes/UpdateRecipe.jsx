import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

class UpdateRecipe extends Component {
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
            value = {this.state.recipeTitle}
            onChange={e => {this.setState({ recipeTitle: e.target.value })}}
            required
          />
          <Form.Input 
            fluid label='Description' 
            placeholder='Description'
            value = {this.state.description}
            onChange = {e => {this.setState({ description: e.target.value })}}
            required
          />
          <Form.Input 
            fluid label='Add ingredient' 
            placeholder='Enter Ingredient'
            value = {this.state.addIngredient}
            onChange = {e => {this.setState({ addIngredient: e.target.value })}}
            required
          />
        </Form.Group>

        <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Update'
            onClick={() => this.setState({ recipeTitle: '', description: '', addIngredient: ''})}
        />
        </Form>
        </Segment>
        )
    }
}

export default UpdateRecipe;