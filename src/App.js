import {React ,useEffect} from 'react';
import ScrollToTopButton from './components/scrolltotopbutton/ScrollToTopButton';
import NavigationBar from './components/navigationbar/NavigationBar';
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
   <NavigationBar/>
   <Outlet/>
   <ScrollToTopButton/>
   <Footer/>
   </>   
      
   
  );
}

export default App;

