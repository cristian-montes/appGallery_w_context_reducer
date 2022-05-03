import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import BlogProvider from './components/context/BlogProvider';

function App() {
  return (
    <div className="App">
      <BlogProvider>
        <div className='App'>
          <Navbar />
          <Hero />
        </div>
      </BlogProvider>
    </div>
  );
}

export default App;
