import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

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
          <Menu.Item
          name="recipes">
              Przepisy
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default TopMenu;