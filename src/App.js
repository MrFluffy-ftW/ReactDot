import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Calculator from "./pages/Calculator";
import { Route , Routes } from "react-router-dom";

function App(){

    return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Calculator" element={<Calculator/>}/>
            </Routes>
        </div>
        <Footer/>
    </>
    );
}


export default App