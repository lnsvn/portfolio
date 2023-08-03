// temp to see in page
import {React, useState} from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
