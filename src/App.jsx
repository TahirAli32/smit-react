import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Two from "./pages/Two"
import OlxHome from './pages/olx/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/assignment/two",
    element: <Two />,
  },
  {
    path: '/assignment/olx',
    element: <OlxHome />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}