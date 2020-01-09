import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

class DeleteRecipe extends Component {
  state = {recipeTitle:''};

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
        </Form.Group>

        <Form.Field
            id='form-button-control-public'
            icon="minus"
            iconPosition="left"
            control={Button}
            content='Delete'
            onClick={() => this.setState({ recipeTitle: ''})}
        />
        </Form>
        </Segment>
        )
    }
}

export default DeleteRecipe;