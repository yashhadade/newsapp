
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import {
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={ <News key="general" pageSize={ 5 } country="in" category="general" /> }>
          </Route>
          <Route path="/business" element={ <News key="business" pageSize={ 5 } country="in" category="business" /> }>
          </Route>
          <Route exact path="/enternainemt" element={ <News key="enternainemt" pageSize={ 5 } country="in" category="enternainemt" /> }>
          </Route>
          <Route exact path="/general" element={ <News key="general" pageSize={ 5 } country="in" category="general" /> }></Route>
          <Route exact path="/health" element={ <News key="health" pageSize={ 5 } country="in" category="health" /> }></Route>
          <Route exact path="/sports" element={ <News key="sports" pageSize={ 5 } country="in" category="sports" /> }></Route>
          <Route exact path="/technology" element={ <News key="technology" pageSize={ 5 } country="in" category="technology" /> }></Route>
        </Routes>
      </div>
    )
  }
} 
