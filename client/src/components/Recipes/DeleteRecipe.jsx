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
            value = {this.state.recipeTitle}
            onChange={e => {this.setState({ recipeTitle: e.target.value })}}
            required
          />
        </Form.Group>

        <Form.Field
            id='form-button-control-public'
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