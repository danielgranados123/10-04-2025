import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home.jsx'
import Nav from "./components/Nav/Nav.jsx";
import DragonBall from './pages/DragonBall.jsx';
import Morty from './pages/Morty.jsx';

function App() {
return (
<>
<Router>
<Nav />  
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/dragon" element={<DragonBall/>} />
<Route path="/morty" element={<Morty/>} />
</Routes>
</Router>
</>
)
}
export default App