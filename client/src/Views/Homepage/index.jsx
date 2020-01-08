import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { TopMenu, Register, WeekPlan } from '../../components/Homepage';

const Home = () => {
  return (
    <Segment>
      <TopMenu></TopMenu>
      <Segment>
        <Header as='h2'>User Registration</Header>
        <Register></Register>
      </Segment>
      <Segment>
        <Header as='h2'>Week Plan</Header>
        <WeekPlan></WeekPlan>
      </Segment>
    </Segment>
  );
};

export default Home;