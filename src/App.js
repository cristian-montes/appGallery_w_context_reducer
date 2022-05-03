import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import BlogProvider from './context/BlogProvider';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <BlogProvider>
        <div className='App'>
          <Navbar />
          <Hero />
          <PostList />
        </div>
      </BlogProvider>
    </div>
  );
}

export default App;
