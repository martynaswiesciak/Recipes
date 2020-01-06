import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class RecipeMenu extends Component {
render() {
    return (
      <div>
        <Menu attached='top'>
          <Menu.Item name="dodajPrzepis">
            Dodaj przepis
          </Menu.Item>

          <Menu.Item name="zauktualizujPrzepis">
            Zaktualizuj przepis
          </Menu.Item>

          <Menu.Item name="usunPrzepis">
              Usuń przepis
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default RecipeMenu;