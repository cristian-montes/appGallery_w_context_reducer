import './App.css';
import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './views/Home';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
      <BlogProvider>
          <div className='App'>
        <Router>
            <Navbar />

          <Routes>
            <Route path ='/' exact element={<Home />} />
            {/* <Route path='/:postId' exact element={<Post />} /> */}
          </Routes>

        </Router>
          </div>
      </BlogProvider>
    </div>
  );
}

export default App;
