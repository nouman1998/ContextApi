import React, { Component, createContext } from 'react'
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
    state = { 
        isLightTheme : false,
        light: {color: "#fff"},
        dark: {color: "#000"},
     }
     toggleTheme = ()=>{
        const {isLightTheme} = this.state;
        this.setState({isLightTheme: !isLightTheme});
    }
    render() { 
        return ( 
        <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {this.props.children}
        </ThemeContext.Provider>
         );
    }
  
}
 
export default ThemeContextProvider;