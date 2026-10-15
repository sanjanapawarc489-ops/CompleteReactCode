
import About from "./Components/About";
import Contact from "./Components/Contact";
import Homeclass from "./Components/Homeclass";
import Aboutclass from "./Components/Aboutclass";
import Home from "./Home";

// Functional Component
function App() {
  return(
    <div>
    <h1>Welcome to React</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga optio laboriosam harum ipsam voluptate eveniet, et amet mi iure, ducimus quis. Facilis voluptate illum expedita, ab similique iure doloribus assumenda ipsa repudiandae?</p>
       <Home />
       <About />
       <Contact />
       <Homeclass />
       <Aboutclass />
       <h3>- Thank You</h3>
    </div>
  )
}

export default App;
