import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbar/Navbars';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const JobContext = createContext([])
export const CartContext = createContext([])

function App() {
  const [feature, setFeatured] = useState([])
  useEffect(()=> {
    fetch('/public/featured-job.json')
    .then(res=> res.json())
    .then(data=> setFeatured(data))
  }, [])
  
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <JobContext.Provider value={[feature, setFeatured]}>
        <CartContext.Provider value={[cart, setCart]}>
          <Navbars></Navbars>
          <ToastContainer />
          <div>
            <Outlet></Outlet>
          </div>
          {/* <Footer></Footer> */}
        </CartContext.Provider>
      </JobContext.Provider>
    </div>
  )
}

export default App
