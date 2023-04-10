import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbar/Navbars';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { createContext, useState } from 'react';

export const JobContext = createContext([])
export const CartContext = createContext([])

function App() {
  const featured = useLoaderData()
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <JobContext.Provider value={featured}>
        <CartContext.Provider value={[cart, setCart]}>
          <Navbars></Navbars>
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
