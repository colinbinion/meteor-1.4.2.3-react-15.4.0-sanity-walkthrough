import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Item from './Item';

import Items from '../api/Items';

class App extends Component {
  addItems(event) {
    event.preventDefault();
    Items.insert({
      itemOne: {
        text: this.refs.itemOne.value.trim(),
        value: 0,
      },
      itemTwo: {
        text: this.refs.itemTwo.value.trim(),
        value: 0,
      }
    });
  }
  render() {
    return (
      <div>
        <header>
          <h1>Colin's Voting Thing</h1>
        </header>
        <main>
          <form onSubmit={this.addItems.bind(this)}>
            <input type='text' ref='itemOne' />
            <input type='text' ref='itemTwo' />
            <button type='submit'>Add VOTING Topics</button>
          </form>
          {this.props.items.map((item) => {
            return <Item item={item} key={item._id}/>
          })}
        </main>
      </div>
    );
  }
}


export default createContainer(() => {
  return {
    items: Items.find({}).fetch()
  }
}, App);
