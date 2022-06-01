import './App.css';
import Navbar from './navbar';
import Title from './title';
import Display from './display';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Title/>
      <br></br>
      <Display
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  )
}

export default App;