import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext'
import AuthContextProvider from './context/AuthContext'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <BookList />
        <Button/>
      </AuthContextProvider>
    </ThemeContextProvider>
     
    </div>
  );
}

export default App;
