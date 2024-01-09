import logo from './logo.svg';
import './App.css';
import { ThemeProvider, theme } from '@chakra-ui/core';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import { Heading, Link } from "@chakra-ui/core";
import Navbar from '../common/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )

  function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
    <ThemeProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>

}