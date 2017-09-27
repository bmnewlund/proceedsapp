import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Signin from './auth/signin';


  export default class App extends Component {
      render() {
          return (
            <div>
              <NavBarHeader />
              
              {this.props.children}
              
            </div>
          );
      }
  }