import {
  createBrowserRouter,
  createRouterFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from '.pages/Create'
import Profile from './page/Profile'

// router and routes
const router = createBrowserRouter(
         createRouterFromElements(
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
