import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { TopMenu } from '../../components/Homepage';
import { RecipeMenu } from '../../components/Homepage';

const Home = () => {
  return (
    <Segment>
      <TopMenu></TopMenu>
      <main>
        <p>
          <br></br>
          <Header as='h2'>PRZEPISY</Header>
          <RecipeMenu></RecipeMenu>
       </p>
      </main>
    </Segment>
  );
};

export default Home;