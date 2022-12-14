import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Two from "./pages/Two"
import OlxHome from './pages/olx/Home'
import TuroHome from './pages/turo/Home'
import Todo from './pages/Todo'
import Portfolio from "./pages/Portfolio"

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
  },
  {
    path: '/assignment/todo',
    element: <Todo />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
])

export default function App() {
  return <RouterProvider router={router} />
}