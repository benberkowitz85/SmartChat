import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//layouts and pages
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'

// router and routes
const router = createBrowserRouter(
         createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    )
  )

  function App() {
    return (
      <RouterProvider router={router} />

    )
  }

  export default App

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
}

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={_theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

// ...
import LoginForm from './pages/LoginForm';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <LoginForm />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
