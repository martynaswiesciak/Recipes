import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { TopMenu } from '../../components/Homepage';

const Home = () => {
  return (
    <Segment.Group>
      <Segment>
        <TopMenu></TopMenu>
      </Segment>

      <Segment>
        <main>
          <div>
            <Form size='large'>
              <Form.Field label='Username' control='input' placeholder='Username' />
            </Form>
            <Form size='large'>
              <Form.Field type='password' label='Password' control='input' placeholder='Password' />
            </Form>
            <Button type='submit'>Submit</Button>
        </div>
        </main>
      </Segment>
    </Segment.Group>
    
  );
};

export default Home;