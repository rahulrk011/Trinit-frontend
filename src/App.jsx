import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/navbar.jsx'; // Use PascalCase for component names
import Header from './components/header.jsx';
import About from './components/about.jsx';
import SignIn from "./components/signin.jsx";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}

export default App;
