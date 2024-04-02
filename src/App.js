import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { ButtonPage } from './pages/buttonPage';

function App() {
  return (
        <Router>
          <div className="w-screen h-screen flex">
            <Sidebar />
            <div className="flex-1 bg-gray-200 p-6">
              <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/buttons' element={<ButtonPage />} />
              </Routes >
            </div>
          </div>
        </Router>
  );
}

export default App;
