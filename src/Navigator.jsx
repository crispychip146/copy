import React from 'react'
import { Router,Route,Routes,useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Map from './components/Map'
import Home from './Home'
import Prehumanera from './components/Story/journey/Prehumanera'
import PreIndustrialEra from './components/Story/journey/PreIndustrialEra'
import Prehuman from './components/Story/journey/Pre_human_st'
import PreIndustry from './components/Story/journey/Pre_industry_st'

export default function Navigator(props) {
    const location = useLocation();

  return <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Story/journey/Prehumanera" element={<Prehumanera />} />
            <Route path="/Story/journey/PreIndustrialEra" element={<PreIndustrialEra />} />
            <Route path="/Story/journey/Prehuman" element={<Prehuman />} />
            <Route path="/Story/journey/PreIndustry" element={<PreIndustry />} />

        </Routes>
    </AnimatePresence>
}

