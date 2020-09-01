import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
  static  contextType = ThemeContext;

  render() { 
    const {isLightTheme, light, dark}= this.context;
    const theme = isLightTheme? light : dark;
    const fontColor = !isLightTheme? light : dark;
   
    return ( 
      <nav style={{backgroundColor:theme.color}}>
        <h1 style={{color: fontColor.color}}>Context App</h1>
        <ul>
          <li style={{color: fontColor.color}}>Home</li>
          <li style={{color: fontColor.color}}>About</li>
          <li style={{color: fontColor.color}}>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;