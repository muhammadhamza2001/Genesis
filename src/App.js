import React from 'react'

import Related from './Related/Related'
import Top from './Top/Top'
import Upper from './Upperfooter/Upper'
import Site from './Site/Site'
import Media from './Media/Media'
import Copyright from './Copyright/Copyright'
import Type from './Type/Type'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Hero from './Hero/Hero'
import AppNavbar from './Navbar/Navbar'
const App = () => {

  return (
    <>
    <AppNavbar/> 
     <Hero/>
      <Type/>
      <Related/>
      <Top/>
      <Upper/>
      <Site/>
      <Media/>
      <Copyright/>
    </>
  )
}

export default App