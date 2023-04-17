import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './routes/PrivateRoute'
import Orders from './components/Orders'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  )
