import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class TopMenu extends Component {
render() {

    return (
      <div>
        <Menu attached='top'>

          <Link to='/plan' className='item'>
            <Menu.Item name="plan">
              Plan
            </Menu.Item>
          </Link>

          <Link to='/profile' className='item'>
            <Menu.Item name="profile">
              Profil 
            </Menu.Item>
          </Link>

          <Link to='/login' className='item'>
            <Menu.Item name="login">
              Logowanie
            </Menu.Item>
          </Link>

          <Link to='/register' className='item'>
            <Menu.Item name="register">
                Rejestracja
            </Menu.Item>
          </Link>

          <Dropdown item text='Przepisy' name='recipes'>
          <Dropdown.Menu>
            <Link to='/addRecipe' className='item'>
            <Dropdown.Item name='addRecipe'>Add recipe</Dropdown.Item>
            </Link>
            <Link to='/updateRecipe' className='item'>
            <Dropdown.Item name='updateRecipe'>Update recipe</Dropdown.Item>
            </Link>
            <Link to='/deleteRecipe' className='item'>
            <Dropdown.Item name='deleteRecipe'>Delete recipe</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        </Menu>
      </div>
    )
  }
}

export default TopMenu;