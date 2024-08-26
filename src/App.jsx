
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes,} from 'react-router-dom';
import Home from './components/Home';
import CurrentGames from './components/CurrentGames';
import NextGames from './components/NextGames';
import PreviousGames from './components/PreviousGames';
import MyReviews from './components/MyReviews';


function App() {
  return (
    <div className="App">
      <Router>
     <header>
      <ul>
        <li> <Link to='/Home'>' Home </Link>  </li>
        <li>  <Link to ='/CurrentGames'>' Current Games </Link></li> 
        <li>  <Link to ='/NextGames'>' Next Games </Link></li>
        <li>  <Link to ='/PreviousGames'>' Previous Games </Link></li>
        <li>  <Link to ='/MyReviews'>' My Reviews </Link></li> 
      </ul>
     </header>
     <main>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/CurrentGames" element={<CurrentGames />} />
      <Route path='/NextGames' element={<NextGames />} />
      <Route path='/PreviousGames' element={<PreviousGames />} />
      <Route path='/MyReviews' element={<MyReviews />} /> 
      </Routes>
      </main>
     
       
    </Router>
     
    </div>
  );
}

export default App;
