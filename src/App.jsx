import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Products from './pages/Products';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
      children:[
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/collection",
          element: <Collection/>
        },
        {
          path: "/contact-us",
          element: <Contact/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/place-order",
          element: <PlaceOrder/>
        },
        {
          path: "/products",
          element: <Products/>
        },
      ]
    }
  ]
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App