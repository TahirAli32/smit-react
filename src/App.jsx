import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Two from "./pages/Two"
import OlxHome from './pages/olx/Home'
import TuroHome from './pages/turo/Home'

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
  },
  {
    path: '/assignment/turo',
    element: <TuroHome />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}