// this import needs to be added to any react component
import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import Items from '../api/Items';

// declare a var/const/let
let hello = 'Colin';
// nested headingClick function inside the component. <h1> added this. to scope to component instead of previous global sense
// let headingClick = function() {
//   console.log('hello');
// }
// this is defining an inline component for sanity checking.  export default defines component allowing import at client/main.js not to use {}
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  headingClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return ( 
// {hello} is referencing variable hello. onClick is an event property. this. calls variable in terms of component
      <header onClick={this.headingClick.bind(this)}>
        {/* {this.state.count} */}
        <Heading count={this.state.count} />
      </header>
    );
  }
}

export default createContainer(() => {
  return {
    items: Items.find({}).fetch()
  }
}, App);

class Heading extends Component {
  render() {
    return (
      <h1>{this.props.count}</h1>
    )
  }
}
