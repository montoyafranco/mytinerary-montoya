
import './App.css';
import './styles/carrousel1.css'
import ResponsiveAppBar from "./components/navbar"
import RecipeReviewCard from "./components/card"
// import CarrouselImg from './components/carrousel';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Carrousel1 from './components/carrousel1';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < ResponsiveAppBar/>
      <Carrousel1/>
      <Routes>
        
        <Route path="/card" element={<RecipeReviewCard/>}/>
        
      
      
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
