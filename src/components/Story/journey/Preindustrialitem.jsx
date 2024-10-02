import React , {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, ButtonGroup } from '@mui/material'
import '../style/CarouselPage.css'
import diatomaceas from '../resources/phytoplankton/diatomaceas.webp'
import dinoflagelados from '../resources/phytoplankton/dinoflagelados.webp'
import singlediatomacea from '../resources/phytoplankton/singlediatomacea.jpg'
import synedra from '../resources/phytoplankton/synedra.jpg'
import synura from '../resources/phytoplankton/synura.jpg'


function Preindustrialitem(props) {
    var items = [
        {
          name: "Global Temperature Trends ",
          description1: "1. Holocene Warm Period (~9,000 – 5,000 BCE): Global temperatures were 1-2°C warmer than the 20th-century average. This warming supported the expansion of forests and warmer climates across much of the Northern Hemisphere.",
          description2: "2. Little Ice Age (~1300 – 1850 CE): Global temperatures cooled by about 1-2°C compared to modern times, especially in the Northern Hemisphere, leading to colder winters, shorter growing seasons, and advancing glaciers. ",
          imageUrl: dinoflagelados,
        },
        {
          name: "Sea Level Changes ",
          description1: "1. Sea Level Rise: Between 9,000 BCE and 3,000 BCE, sea levels rose by approximately 35 meters due to glacial melting. By around 3,000 BCE, sea levels stabilized at near-modern levels. ",
          description2: "2. Coastal regions were reshaped, creating new ecosystems and altering human settlements, especially in areas where early human civilizations developed near the coasts. ",
          imageUrl: synura,
        },
        {
          name: "Atmospheric Composition ",
          description1: "1. CO2 Levels: Atmospheric carbon dioxide (CO2) concentrations were around 270-280 ppm (parts per million) compared to today's 420 ppm. This indicates a stable climate system where the influence of human activities on global warming was minimal. ",
          description2: "2. Methane Levels: Methane (CH4) concentrations hovered around 700 ppb (parts per billion), significantly lower than modern levels of around 1,900 ppb. Methane levels remained relatively low, reflecting the absence of major industrial sources of methane like fossil fuel extraction and agriculture. ",
          imageUrl: diatomaceas,
        },
        {
          name: "Regional Climate Effects ",
          description1: "1. Medieval Warm Period (950 – 1250 CE): During this period, global temperatures were 0.3-0.5°C warmer than the long-term average, leading to increased agricultural productivity in regions such as Europe.  ",
          description2: "2. Little Ice Age (1300 – 1850 CE): Global temperatures dropped by about 1-2°C, particularly in the Northern Hemisphere, compared to the Medieval Warm Period. Rivers like the Thames in London froze over, and colder conditions resulted in severe famines. The Great Famine of 1315-1317, driven in part by unusually cold and wet conditions, led to a population decline of 10-25% in parts of Europe. ",
          imageUrl: singlediatomacea,
        },
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState(items[0]);
    useEffect(() => {
        // Update the current item when the activeIndex changes
        
        setCurrentItem(items[activeIndex]);
      }, [activeIndex, items]);
    
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
        handleNext();
        } else if (e.key === 'ArrowLeft') {
        handlePrev();
        }
    };

    const renderText = () => {
        return (
          <div id="carouselDescription"> 
            <Typography className="phyto-name">
              {currentItem.name}
            </Typography>
            <Typography className="phyto-desc">{currentItem.description1}</Typography>
            <Typography className="phyto-desc">{currentItem.description2}</Typography>
          </div>
        );
      };
  
    return (
        <div id="carousel-naim" onKeyDown={handleKeyDown} tabIndex={0} >
            <Carousel
                className = "carousel-container"
                animation="false"
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                index={activeIndex}
                onChange={(index) => setActiveIndex(index)}    
                style={{ width: '70%', margin: 'auto'}}
                height={'600px'}
                >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                    ))}
            </Carousel>
            <div className="carousel-naim-text">
                {renderText()}
            </div>
      </div>
    );
  }
  
  function Item(props) {
    return (
      <Paper className="carousel-item"
        elevation={10}
      >
        <img src={props.item.imageUrl}
          alt={props.item.name}
          className="carousel-image"
          />
      </Paper>
    );
  }
  
  export default Preindustrialitem;