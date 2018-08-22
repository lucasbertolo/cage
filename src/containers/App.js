import React, { Component } from 'react';

//components
import Header from '../components/Header/Header';
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Members from '../components/Members/Members'
import Discography from '../components/Discography/Discography';
import Calendar from '../components/Calendar/Calendar';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import Warning from '../components/Warning/Warning'

//constants
import {MEMBERS, SOURCES, CONCERTS} from './constants';

import './App.css';

class App extends Component {   
  constructor(props){
    super();
    this.state = {
      section: '',
      reminder: true
    }
  }
  updatingSectionName = (section) => {
      this.setState({section})
  }  

  handleReminder = () => {
    return this.setState({reminder: false})
  }

  render() {     

    return (
      
      <div className="App">    
        <Warning handleReminder={this.handleReminder}
                 reminder={this.state.reminder}/>    
        <Header section={this.state.section}/> 
        <Navbar updatingSectionName={this.updatingSectionName}/>
        <Home />
        <About />
        <Members members={MEMBERS} /> 
        <Discography sources={SOURCES} /> 
        <Calendar concerts={CONCERTS}/> 
        <Contact /> 
        
      </div>                             
    );
  }
}

export default App;
