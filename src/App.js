import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/organisms/Menu';
import Footer from './components/organisms/Footer';
import Services from './pages/Services';
import Admin from './pages/Admin';
import Login from './components/organisms/Login';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const [showMenuFooter, setShowMenuFooter] = useState(true);
  
  let [bodyStyle, setBodyStyle] = useState({})

  useEffect(() => {

    let style = {
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }
    let styleLS = localStorage.getItem("BodyStyle"); 
        
        if(styleLS==null){
          localStorage.setItem("BodyStyle", JSON.stringify(style))
        } else {
            setBodyStyle(JSON.parse(styleLS));
        }

    setShowMenuFooter(!['/admin', '/admin/login', '/admin/dashboard'].includes(location.pathname));
  }, [location.pathname]);

  return (
    <div className="App" style={bodyStyle}>
      {showMenuFooter && <Menu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Routes>
      {showMenuFooter && <Footer />}
    </div>
  );
}

export default App;
