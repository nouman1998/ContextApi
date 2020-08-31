import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
class Button extends Component {
    state = {  }
    static contextType = ThemeContext;
    render() { 
        const {toggleTheme} = this.context;
        console.log(this.context)
        return (  
            <React.Fragment>
                <button onClick= {toggleTheme}>Toggle Theme</button>
            </React.Fragment>
        );
    }
}
 
export default Button;