import {
  createBrowserRouter,
  createRoutesFromElements,
  Route} from 'react-router-dom'

//layouts and pages
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'

// router and routes
// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter(
         createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    )
  )

/**
 * @typedef {NewType} NewType_1
 */

/**
 * @typedef {[] | [] | []} NewType
 */
