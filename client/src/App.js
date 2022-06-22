import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import CreateNewAuction from './CreateNewAuction'
import CreateAsset from './CreateAsset'
import RunningAuctions from './RunningAuctions'
import PlaceBid from './PlaceBid'
import RunningContracts from "./RunningContracts";
import Team from './Team'
import createContract from './createContract'
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import { initializeApp } from "firebase/app";
import db from './firebase';


function App() {
  return (
    <div className = "App">
        <Switch>
          <Route path="/createAsset" component = {CreateAsset}/>
          <Route path="/createAuction" component = {CreateNewAuction}/>
          <Route path="/runningAuctions" component = {RunningAuctions}/>
          <Route path="/placeBid" component = {PlaceBid}/>
          <Route path="/createContract" component = {createContract}/>
          <Route path="/runningContracts" component = {RunningContracts}/>
          <Route path="/team" component = {Team}/>
          <Route path="/signup" component = {Signup}/>
          <Route path="/home" component = {Home}/>
          <Route exact path="/" component = {Login}/>
        </Switch>
    </div>
  );
}

export default App;
