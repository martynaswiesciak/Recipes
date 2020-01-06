import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class RecipeMenu extends Component {
render() {
    return (
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
    )
  }
}

export default RecipeMenu;