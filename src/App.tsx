import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AboutPage from './pages/About page';
import Freelance1 from './pages/Free lance 1';
import Job4 from './pages/job  4';
import Job1 from './pages/job 1';
import Job2 from './pages/job 2';
import Job3 from './pages/job 3';
import Job5 from './pages/job 5';
import LandingPage from './pages/landing page';
import LogoutPage from './pages/logout page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/signup" element={<Freelance1 />} />
       

        <Route path="/job/1" element={<Job1 />} />
        <Route path="/job/2" element={<Job2 />} />
        <Route path="/job/3" element={<Job3 />} />
        <Route path="/job/4" element={<Job4 />} />
        <Route path="/job/5" element={<Job5 />} />

        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
