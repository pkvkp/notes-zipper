import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/Landing/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
