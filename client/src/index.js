import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/Homepage';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'
import { TopMenu } from './components/Homepage';



const App = () => {
    return (
      <container>
        <BrowserRouter>
          <div>
            <TopMenu/>
            <Route path='/plan' exact component={Home}/>
            <Route path='/profile' exact component={Home}/>
            <Route path='/login' exact component={Home}/>
            <Route path='/register' exact component={Home}/>
            <Route path='/recipes' exact component={Home}/>
          </div>
        
        </BrowserRouter>
      </container>
      
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

