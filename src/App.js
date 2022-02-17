
import './App.css';
import ResponsiveAppBar from "./components/navbar"
import RecipeReviewCard from "./components/card"
import CarrouselImg from './components/carrousel';


function App() {
  return (
    <div className="App">
      < ResponsiveAppBar/>
      <RecipeReviewCard/>
      <CarrouselImg/>

      
    </div>
  );
}

export default App;
