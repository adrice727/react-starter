import React from 'react';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {

  render() {
    return (
        <div>
            <h1>Hello</h1>  
            <RouteHandler/>
        </div>
    );
  }
}
