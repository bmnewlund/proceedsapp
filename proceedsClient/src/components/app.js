import React, { Component } from 'react';
import NavBarHeader from './nav';
import SplashSignup from './splash';



  export default class App extends Component {
      render() {
          return (
            <div>
              <NavBarHeader />
              <SplashSignup />
            {this.props.children}
            
            </div>
          );
      }
  }