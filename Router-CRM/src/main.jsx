import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Root, {loader as RootLoader , action as RootAction} from './Root'
import ErrorPage from './smallerPages/ErrorPage'
import Contact from './smallerPages/Contact'
import { loader as contactLoader } from './smallerPages/Contact'
import EditPage, {action as EditAction} from './smallerPages/EditPage'
import {action as DestroyAction} from './smallerPages/Destroy'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<ErrorPage />,
    loader:RootLoader,
    action:RootAction,
    children:[
      {
        path:'/contacts/:contactId',
        element:<Contact />,
        loader:contactLoader,
      },
      {
        index:true,
        element:<div id='error-page'>
          <h1>Two hours before iftar, wait lil bro</h1>
          <p>being gay's haram</p></div>
      },
      {
        path:'/contacts/:contactId/edit',
        element:<EditPage />,
        loader:contactLoader,
        action:EditAction
      },
      {
        path:'/contacts/:contactId/destroy',
        action:DestroyAction
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
