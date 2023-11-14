import React from 'react'
import './HomePage.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import FeatureCard from '../../components/featuredCard/FeatureCard'
import PropertyList from '../../components/propertyList/PropertyList'
import FeatureProperty from '../../components/featuredProperty/FeatureProperty'
import MailList from '../../components/mailList/MailList'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <FeatureCard/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Browse by property type</h1>
        <FeatureProperty/>
        <MailList/>
      </div>
    </div>
  )
}

export default HomePage