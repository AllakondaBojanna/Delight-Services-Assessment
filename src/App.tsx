// src/App.tsx
import React, { Component, useState } from 'react';
import ThemeProvider, { ThemeContext } from './context/ThemeProvider';
import LoginPage from './components/LoginPage';
import PincodeLookup from './components/PincodeLookup';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ toggleTheme }) => (
          <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <LoginPage />
            <PincodeLookup />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
