import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Creators from "./components/Creators";
import Analytics from "./components/Analytics";
import Pricing from "./components/Pricing";
function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/videos" element={<Videos/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/creators" element={<Creators/>} />
      <Route path="/analytics" element={<Analytics/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
