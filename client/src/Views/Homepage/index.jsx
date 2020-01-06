import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { TopMenu, Register } from '../../components/Homepage';

const Home = () => {
  return (
    <Segment>
      <TopMenu></TopMenu>
      <Header as='h2'>User Registration</Header>
      <Register></Register>
    </Segment>
  );
};

export default Home;