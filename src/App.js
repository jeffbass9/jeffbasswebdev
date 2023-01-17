import React from 'react';

import {BrowerRouter as Router, Route, Routes, useRoutes} from 'react-router-dom';

import HomePage from './pages/HomePage';

import logo from './logo.svg';


// import './App.css';
import './scss/application.scss';

export default function App() {

    return(
      <Routes>
        <Route exact path="/" element={ <HomePage/> }/>
      </Routes>
    );

}
