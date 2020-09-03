import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.js'
import New from './components/New.js'
import ServicesTabs from './Services/ServicesTabs.js'
import Review from './components/Review.js'
import Jobs from './components/Jobs.js'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <New />
      <ServicesTabs />
      <Jobs />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
