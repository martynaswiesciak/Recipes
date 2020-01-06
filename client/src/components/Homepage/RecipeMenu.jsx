import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class RecipeMenu extends Component {
render() {
    return (
        <Menu attached='top'>
          <Menu.Item name="addRecipe">
            Add
          </Menu.Item>

          <Menu.Item name="updateRecipe">
            Update
          </Menu.Item>

          <Menu.Item name="deleteRecipe">
              Delete
          </Menu.Item>
        </Menu>
    )
  }
}

export default RecipeMenu;