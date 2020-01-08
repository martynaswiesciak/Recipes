import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { TopMenu } from '../../components/Homepage';

class Home extends Component {
  state = { uname: '', pasw:''};

  onFormSubmit = (e) =>{
    console.log(this.state.uname);
    console.log(this.state.pasw);
  }

  render(){
      return (
        <Segment.Group>
      
          <Segment>
            <main>
              <div>
                <Form size='large' onSubmit={this.onFormSubmit}>
                  <Form.Field label='Username' control='input' placeholder='Username' value={this.state.uname} onChange={e=> this.setState({uname: e.target.value})} />
                  <Form.Field type='password' label='Password' control='input' placeholder='Password' value={this.state.pasw} onChange={e=> this.setState({pasw: e.target.value})}/>
              
                  <Button type='submit'>Submit</Button>
                </Form>
            </div>
            </main>
          </Segment>
        </Segment.Group>
            
      );
  }
  
};

export default Home;