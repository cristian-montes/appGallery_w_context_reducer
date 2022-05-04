import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import BlogProvider from './context/BlogProvider';
import PostList from './components/PostList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BlogProvider>
          <div className='App'>
        <Router>
            <Navbar />

          <Routes>
            <Route path ='/' exact element={<Home />} />
          
          </Routes>
          
        </Router>
          </div>
      </BlogProvider>
    </div>
  );
}

export default App;
