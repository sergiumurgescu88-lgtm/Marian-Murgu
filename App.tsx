import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diagnostics from './pages/Diagnostics';
import DueDiligence from './pages/DueDiligence';
import About from './pages/About';
import Engineering from './pages/Engineering';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostic" element={<Diagnostics />} />
          <Route path="/due-diligence" element={<DueDiligence />} />
          <Route path="/despre-noi" element={<About />} />
          <Route path="/inginerie" element={<Engineering />} />
          <Route path="/proiecte" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;