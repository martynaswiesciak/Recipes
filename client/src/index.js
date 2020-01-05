import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/Homepage';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

const App = () => {
    return (
      <Container>
      <Home/>
      </Container>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

