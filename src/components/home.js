import React, { Component } from 'react';
import Card from './card';
import Header from './header';
import Input from './input';
class Home extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        { Header() }
        <Card />
      
        
      </div>
    );
  }
}
