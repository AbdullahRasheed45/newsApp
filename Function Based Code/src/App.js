import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
//  const pageSize = 5;

const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          />
          <Routes>
            <Route
              path="/business"
              element={<News setProgress = {setProgress}  key="business" pageSize={9} country="in" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress = {setProgress}  key="entertainment" pageSize={9} country="in" category="entertainment" />}
            />
            <Route
              path="/general"
              element={<News setProgress = {setProgress}  key="general" pageSize={9} country="in" category="general" />}
            />
            <Route
              path="/sports"
              element={<News setProgress = {setProgress}  key="sports" pageSize={9} country="in" category="sports" />}
            />
            <Route
              path="/health"
              element={<News setProgress = {setProgress}  key="health" pageSize={9} country="in" category="health" />}
            />
            <Route
              path="/science"
              element={<News setProgress = {setProgress}  key="science" pageSize={9} country="in" category="science" />}
            />
            <Route
              path="/technology"
              element={<News setProgress = {setProgress}  key="technology" pageSize={9} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  
}
export default App