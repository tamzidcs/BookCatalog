
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import DisplayBooks from './components/DisplayBooks'
import AddNewBook from './components/AddNewBook';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const Landing = () => {
  return (

    <div>
      <h2 style={styles.landing}>Landing</h2>
      
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Router>        
        <Header />
        <TopBar />        
        <Routes style={styles.container}>
          <Route path="/" element={<Landing />} />
          <Route path="/AddNewBook" element={<AddNewBook />} />
          <Route path="/DisplayBooks" element={<DisplayBooks />} />
        </Routes>

      </Router>
     </div>
  );
}
const styles={
  test:{
    color:'red',
    display:'inline-flex',
    
  },
  sidebar:{
    display:'inline-block',
    width:'100vw',
    
  },
  container:{
    display:'inline-flex',
    width:'10vw'
  },
  landing:{
    width:'10vw',
    display:'inine-flex'
  }
}
export default App;
