// this is not necessary bc it is in the client folder (it will still work), but best practice is to add imports regardless.  Component allows for quick react sanity testing.
import React, { Component } from 'react';
// imports meteor from file path
import { Meteor } from 'meteor/meteor';
// imports the render sub-export from the react dom
import { render } from 'react-dom';

// no {} were needed bc export default in imports/App.js. import Component from 'filepath/relative/toWhere/You/are'.  No js/jsx definition required.
import App from '../imports/client/App';

// add meteor startup function. An fat arrow function is no different than a regular function except in how it scopes this function.  Use of both regular function and fat arrow function to achieve different scopes.
Meteor.startup(() => {
// this renders a react component via react-dom and the location in which the app is rendering
  render(<App />, document.getElementById('render-target'))
});
