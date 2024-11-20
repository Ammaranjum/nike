import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import NavBarMini from "./components/NavBarMini";


const App =  () => {
    return (
        <div>
        <NavBarMini/>
       <Navigation />
       <HeroSection />
     </div>)
}

export default App;



