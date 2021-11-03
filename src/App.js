import './App.css';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import CreatePost from './CreatePost/CreatePost';


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
