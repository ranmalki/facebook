import './App.css';
import CreatePost from '../CreatePost/CreatePost';
import Header from '../Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePost />
      <Feed />
      
    </div>
  );
}

export default App;
