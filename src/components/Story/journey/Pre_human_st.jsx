import React from 'react';
import { motion } from 'framer-motion';
import Image from '../resources/prehumanera/volcanic_erupt.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const PreHuman = () => {
  return (
    <motion.div
      className='pre_human_st'
      style={{ height: '100vh', overflow: 'hidden' }}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.5 }}
      exit={{ x: window.innerWidth }}
    >
      <img
        src={Image}
        style={{ position: 'absolute', top: '0vh', width: '100%', maxHeight: '100vh', zIndex: '-100' }}
        alt="Background"
      />
      <div style={{ position: 'absolute', top: '0vh', width: '100%', height: '100vh', width:'100vw' }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.2, ease: 'circOut' }}
          style={{ position: 'relative', top: '0vh', left: '5vw', width: '90vw' }}
        >
          <h1 style={{ position: 'relative', textAlign: 'left', color: '#fcffff', fontSize: '7.5vw ', fontWeight: '700',fontFamily:'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', lineHeight:'2' }}>Pre-human Age </h1>
          <h2 style={{ position: 'relative', left: '3vh', color: '#b4f1f5', fontSize: '2.9vw', maxWidth: '60%', textAlign: "left", fontWeight: '500',fontFamily:'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', lineHeight:'1.7',backdropFilter:'blur(8px)', borderRadius:'30px'  ,width:'fit-content' }}>
          Earth's Fiery Dawn: A World Forged by Chaos and Transformed by Microbes
          </h2>
        </motion.div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <motion.div
          initial={{ right: '-200vw' }}
          animate={{ right: '-50vw' }}
          transition={{ duration: 1.2, ease: 'circOut' }}
          style={{ position: 'relative', top: '0vh', width: '45vw' }}
        >
          <p style={{ position: 'relative', color: '#b4f1f5', fontSize: '1.5vw',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)', fontWeight: '400',fontFamily:'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', lineHeight:'1.4',backdropFilter:'blur(8px)', borderRadius:'30px' , padding:'10px' ,width:'fit-content',margin:'20px auto'  }}>
          The pre-human era was marked by a volatile climate with high CO2 levels,
          volcanic activity, and fluctuating temperatures, gradually stabilizing 
          as oxygen levels rose.During this time, early microbes played a crucial 
          role in transforming the atmosphere, paving the way for Earth's eventual 
          climate stabilization.
          </p>
          <div style={{ position: 'relative' }}>
            <ButtonGroup variant="contained" style={{ display: 'flex', position: 'absolute', right: '0vw' }}>
              <Link to="/Story/journey/Prehumanera">
                <Button>Next</Button>
              </Link>
            </ButtonGroup>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PreHuman;
