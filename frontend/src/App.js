import React from 'react';


// import Dashboard from './pages/dashboard';
import Dashboard from './pages/dashboard2';
import FAQ from './partials/FAQ';
import Footer from './partials/footer';

function App() {
    
//   const location = useLocation();

//   useEffect(() => {
//     document.querySelector('html').style.scrollBehavior = 'auto'
//     window.scroll({ top: 0 })
//     document.querySelector('html').style.scrollBehavior = ''
//   }, [location.pathname]); 
  return (
    <Dashboard/>
    // <Footer />
    // <FAQ />
  )
}

export default App