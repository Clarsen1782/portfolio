
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/aboutme';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './components/projects';
import Blog from './components/blog'

function App() {
 

  return (
    <Router>
      <div className='back'>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
