import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Routes/Root'
import { ContactLoader, RootLoader } from './data/loader'
import ErrorPage from './Routes/ErrorPage'
import Contact from './Routes/childrenRoutes/Contact'
import EditPage from './Routes/childrenRoutes/EditPage'
import { ContactAction, DestroyAction, EditAction, NavAction } from './data/actions'



const router = createBrowserRouter([
    {
      path:'/',
      element:<Root />,
      loader:RootLoader,
      errorElement:<ErrorPage />,
      action:NavAction,
      children: [
        {
          errorElement:<ErrorPage />,
          children:[
          {
            path:'/contacts/:Id',
            element:<Contact />,
            loader:ContactLoader,
            action:ContactAction
          },
          {
            path:'/contacts/:Id/edit',
            loader:ContactLoader,
            element:<EditPage />,
            action:EditAction,
          },
          {
            path:'/contacts/:Id/destroy',
            action:DestroyAction,
          }
        ]
      },
    ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
