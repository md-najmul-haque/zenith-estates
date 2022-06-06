import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Booking from './Pages/Dashboard/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="booking" element={<Booking />} />
          <Route path="addReview" element={<AddReview />} />
        </Route>
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
