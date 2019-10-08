import React from 'react';
import logo from './logo.svg';
import './App.css';
import { all } from 'q';
import ApplicationViews from './scripts/applicationViews/applicationviews';
import NavBar from './scripts/nav/navbar';

function App() {
  return (
   <>
   <NavBar />
   <ApplicationViews />
   </>
  );
}

export default App;
