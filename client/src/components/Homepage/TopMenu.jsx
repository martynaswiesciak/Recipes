import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
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

          <Link to='/recipes' className='item'>
            <Menu.Item name="recipes">
                Przepisy
            </Menu.Item>
          </Link>

        </Menu>
      </div>
    )
  }
}

export default TopMenu;