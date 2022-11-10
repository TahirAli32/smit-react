import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Two from "./pages/Two"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/assignment/two",
    element: <Two />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}