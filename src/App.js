import  './index.css' ; 
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom' ;
//importing components - layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
//importing route,pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

import Alert from './components/Alert';

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    
    <Router>
    <div className='flex flex-col justify-between  '>
    <Navbar />
    </div>
    <Alert />
    <main className='container mx-auto px-3 pb-12 '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/user/:login' element={<User />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>

    <Footer />
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
