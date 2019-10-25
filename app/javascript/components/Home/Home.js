import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';
class Home extends Component {
  constructor() {
    super();
    //set our initial state here modules array that holds all the objects
    this.state = {
      course_modules: [
        {
          id: 1,
          title: 'Setting up a new RoR with React',
          description: 'lorem ipsum',
          active: false
        },
        {
          id: 2,
          title: 'Adding React to an Existing Rails App',
          description: 'lorem ipsum',
          active: false
        },
        {
          id: 3,
          title: 'Building a Hello world app',
          description: 'lorem ipsum',
          active: false
        },
        {
          id: 4,
          title: 'Adding React Router DOM to your app',
          description: 'lorem ipsum',
          active: false
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Jumbotron />
        <Table course_modules={this.state.course_modules} />
      </div>
    );
  }
}
export default Home;
