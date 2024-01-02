import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './componnents/Login.jsx'
import User from './componnents/User.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Admin from './componnents/Admin.jsx'
import ServiceView from './componnents/ServiceView.jsx'
import Meeting from './componnents/Meeting.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<User />,
    errorElement:<div>USER not found</div>
  },
  {
    path:'/admin',
    element:<Admin/>,
    errorElement:<div>Admin not found</div>,
    children:[
      {
        path:'ServiceView',
        element:<ServiceView/>,
        errorElement:<div>ServiceView not found</div>
      },
      {
        path:'Meeting',
        element:<Meeting/>,
        errorElement:<div>Meeting not found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

