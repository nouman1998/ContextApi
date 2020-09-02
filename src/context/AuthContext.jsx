import React, { Component, createContext } from 'react'
export const AuthContext = createContext();
class AuthContextProvider extends Component {
    state = { 
       isUserRegistered: false
     }
     toggleTheme = ()=>{
        const {isUserRegistered} = this.state;
        this.setState({isUserRegistered: !isUserRegistered});
    }
    render() { 
        return ( 
        <AuthContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {this.props.children}
        </AuthContext.Provider>
         );
    }
  
}
 
export default AuthContextProvider;