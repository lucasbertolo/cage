import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

//components
import Header from '../components/Header/Header';
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Members from '../components/Members/Members'
import Discography from '../components/Discography/Discography';
import Calendar from '../components/Calendar/Calendar';
import Contact from '../components/Contact/Contact';
import Warning from '../components/Warning/Warning';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

//constants
import {MEMBERS, SOURCES, CONCERTS} from './resources';

import './App.css';

class App extends Component {   
  constructor(props){
    super();
    this.state = {
      reminder: true
    }
  }

  handleReminder = () => {
    return this.setState({reminder: false})
  }

  render() {     

    return (
      
      <div className="App">  
        <ErrorBoundary>  
          <Warning handleReminder={this.handleReminder}
                   reminder={this.state.reminder}/>    
          <Header section={this.state.section}/> 
          <Home />
          <LazyLoad>
            <About />
          </LazyLoad>
          <LazyLoad>
            <Members members={MEMBERS} /> 
          </LazyLoad>
          <LazyLoad>
            <Discography sources={SOURCES} /> 
          </LazyLoad>
          <LazyLoad>
            <Calendar concerts={CONCERTS}/> 
          </LazyLoad>
          <LazyLoad>
            <Contact />
          </LazyLoad>
        </ErrorBoundary>        
      </div>                             
    );
  }
}

export default App;
