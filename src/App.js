import React from 'react'
import './App.css';

import { Brand,CTA,Navbar } from './components';
import { Footer , Blog, Possibility , Features, Whatgpt3, Header} from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App