import Home from '../Home/Home';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import './App.css';
import PackageContextProvider from '../../context/PackageContextProvider.jsx';
import { Outlet } from 'react-router-dom';



function App() {
  

  
  return (
    
    <>
    <PackageContextProvider>
      <Header/>
    <Outlet/>
    <Footer/>
    </PackageContextProvider>
    </>
  )
}

export default App
