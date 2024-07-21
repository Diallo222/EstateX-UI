import React , { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Home, Layout } from './pages/main'
import { List } from './pages/post'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
          // loader: listLoader,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />;
}

export default App
