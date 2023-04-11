import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('featured-job.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-jobs",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "job-details",
        element: <Details></Details>
      },
      {
        path: "blogs",
        element: <h2>blog section</h2>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
