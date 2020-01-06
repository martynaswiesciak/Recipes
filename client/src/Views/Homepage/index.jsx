import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { TopMenu, RecipeMenu, AddRecipe } from '../../components/Homepage';

const Home = () => {
  return (
    <Segment>
      <TopMenu></TopMenu>
      <main>
        <p>
          <br></br>
          <Header as='h2'>PRZEPISY</Header>
          <RecipeMenu></RecipeMenu>
          <br></br>
          <Header as='h3'>Dodaj przepis</Header>
          <AddRecipe></AddRecipe>
       </p>
      </main>
    </Segment>
  );
};

export default Home;