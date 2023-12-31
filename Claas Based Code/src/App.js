import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;

state = {
  progress: 0
}
setProgress =(progress) =>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/business"
              element={<News setProgress = {this.setProgress}  key="business" pageSize={9} country="in" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress = {this.setProgress}  key="entertainment" pageSize={9} country="in" category="entertainment" />}
            />
            <Route
              path="/general"
              element={<News setProgress = {this.setProgress}  key="general" pageSize={9} country="in" category="general" />}
            />
            <Route
              path="/sports"
              element={<News setProgress = {this.setProgress}  key="sports" pageSize={9} country="in" category="sports" />}
            />
            <Route
              path="/health"
              element={<News setProgress = {this.setProgress}  key="health" pageSize={9} country="in" category="health" />}
            />
            <Route
              path="/science"
              element={<News setProgress = {this.setProgress}  key="science" pageSize={9} country="in" category="science" />}
            />
            <Route
              path="/technology"
              element={<News setProgress = {this.setProgress}  key="technology" pageSize={9} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
