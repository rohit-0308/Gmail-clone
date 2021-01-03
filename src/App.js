import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";

import { useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
