import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import AboutPage from './pages/About page';
import Employer1Page from './pages/employer 1';
import Employer2Page from './pages/employer 2 ';
import Employer3Page from './pages/employer 3';
import Employer4Page from './pages/employer 4 ';
import Employer5Page from './pages/employer 5';
import Freelance2 from './pages/free lance 2 ';
import Freelance3 from "./pages/free lance 3";
import Freelance4 from "./pages/free lance 4";
import Freelance5 from "./pages/free lance 5";
import Freelance1 from './pages/SignUpPage';

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
        <Route path="/1" element={<Freelance2 />} />
        <Route path="/2" element={<Freelance3 />} />
        <Route path="/3" element={<Freelance4 />} />
        <Route path="/4" element={<Freelance5 />} />
        <Route path="1e" element={<Employer1Page />} />
        <Route path="2e" element={<Employer2Page />} />
        <Route path="3e" element={<Employer3Page />} />
        <Route path="4e" element={<Employer4Page />} />
        <Route path="5e" element={<Employer5Page />} />
        <Route path="/signup/freelance" element={<Freelance2 />} />
        <Route path="/signup/employer" element={<Employer1Page />} />


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
