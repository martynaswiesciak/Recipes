import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/Homepage';
import Register from './components/Register/Register';
import WeekPlan from './components/WeekPlan/WeekPlan';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'
import { TopMenu } from './components/Homepage';
import AddRecipe from './components/Recipes/AddRecipe';
import UpdateRecipe from './components/Recipes/UpdateRecipe';
import DeleteRecipe from './components/Recipes/DeleteRecipe';

const App = () => {
    return (
      <container>
        <BrowserRouter>
          <div>
            <TopMenu/>
            <Route path='/plan' exact component={WeekPlan}/>
            <Route path='/profile' exact component={Home}/>
            <Route path='/login' exact component={Home}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/addRecipe' exact component={AddRecipe}/>
            <Route path='/updateRecipe' exact component={UpdateRecipe}/>
            <Route path='/deleteRecipe' exact component={DeleteRecipe}/>
          </div>
        
        </BrowserRouter>
      </container>
      
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

