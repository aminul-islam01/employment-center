import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbar/Navbars';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Navbars></Navbars>
      <div>
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
