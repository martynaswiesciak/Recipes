import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';

class TopMenu extends Component {
render() {

    return (
      <div>
        <Menu attached='top'>
          <Menu.Item
            name="plan">
            Plan
          </Menu.Item>

          <Menu.Item
            name="profile">
            Profil 
          </Menu.Item>

          <Menu.Item
          name="login">
              Logowanie
          </Menu.Item>
          <Menu.Item
          name="register">
              Rejestracja
          </Menu.Item>

          <Dropdown item text='Recipes'>
          <Dropdown.Menu>
            <Dropdown.Item>Add recipe</Dropdown.Item>
            <Dropdown.Item>Update recipe</Dropdown.Item>
            <Dropdown.Item>Delete recipe</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        </Menu>
      </div>
    )
  }
}

export default TopMenu;