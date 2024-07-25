import React , { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Home, Layout } from './pages/main'
import { PostDetail, PostList } from './pages/post'
import { Profile } from './pages/user'
import { Login, Register } from './pages/auth'

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
          element: <PostList />,
          // loader: listLoader,
        },
        {
          path: "/:id",
          element: <PostDetail />,
          // loader: postLoader,
        },
        {
          path: "/profile",
          element: <Profile />,
          // loader: postLoader,
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
      ],
    },
  ])

  return <RouterProvider router={router} />;
}

export default App
