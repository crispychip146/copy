import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, ButtonGroup } from '@mui/material'
import '../styles/CarouselPage.css'
import diatomaceas from '../resources/phytoplankton/diatomaceas.webp'
import dinoflagelados from '../resources/phytoplankton/dinoflagelados.webp'
import singlediatomacea from '../resources/phytoplankton/singlediatomacea.jpg'
import synedra from '../resources/phytoplankton/synedra.jpg'
import synura from '../resources/phytoplankton/synura.jpg'


function Industrialitem(props) {
    var items = [
        {
            name: " Transition to Industrialization ",
            description1: "1. Beginning of the Industrial Revolution: The Industrial Revolution began in the late 18th century, first in Britain before spreading globally. This period saw a shift from agrarian and manual labor economies to industrialized and urbanized economies. ",
            description2: "2. Technological Advancements: One of the most critical innovations was the steam engine, patented by James Watt in 1769, which revolutionized how energy was harnessed. Steam engines powered textile mills, factories, and later railways and ships, enabling the transition to mass production. ",
            imageUrl: dinoflagelados,
        },
        {
            name: "Rise in Factory Production",
            description1: "1. Mechanized Factories: The rise of mechanized factories in the late 18th century transformed how goods were produced, moving away from traditional hand-crafted goods. Factories became the heart of urban industrial centers, drawing large numbers of people from rural areas to cities, increasing both the urban population and pollution levels. ",
            description2: "2. Energy Demand: The need for energy to power these factories led to the widespread use of coal. Steam engines in factories ran on coal, and as industries grew, so did the demand for coal mining, exacerbating environmental degradation. ",
            imageUrl: synura,
        },
        {
            name: "Coal Consumption and Greenhouse Gas Emissions ",
            description1: "1. Coal as the Primary Energy Source: Coal was the primary energy source for steam engines, industrial machinery, and transportation systems (like trains and ships). By the mid-19th century, annual coal consumption in Britain alone surpassed 100 million tons, representing a major leap in energy consumption compared to the Pre-Industrial Era. ",
            description2: "2. Greenhouse Gas Emissions: The burning of coal released large quantities of carbon dioxide (CO₂) and other pollutants like sulfur dioxide (SO₂) into the atmosphere. This was a significant shift in Earth's carbon balance, as large-scale industrial activity introduced unprecedented levels of CO₂ into the air",
            imageUrl: diatomaceas,
        },
        {
            name: "Environmental and Climate Impacts",
            description1: "1. Air Pollution: The widespread use of coal led to severe air pollution, particularly in industrial cities. Smog, a dense and harmful mixture of smoke and fog, became a common phenomenon in urban centers such as London. This pollution not only darkened the skies but also caused widespread health problems, including respiratory diseases and shorter life expectancy. ",
            description2: "2. Water Pollution: Industrial factories discharged large amounts of untreated waste directly into rivers and lakes. These pollutants, including toxic chemicals from textile dyeing, tanning, and metalworks, caused widespread contamination of water sources, killing aquatic life and rendering drinking water unsafe for urban populations. ",
            imageUrl: diatomaceas,
        },
        {
            name: "Societal Impacts of Climate Shifts",
            description1: "1. Urbanization and Health Issues: As factories drew more workers to cities, populations became concentrated in industrial centers. The combined effects of air and water pollution made urban life unhealthy. Studies from the era showed increased mortality rates in industrial cities compared to rural areas, often due to respiratory diseases caused by air pollution. ",
            description2: "2. Increased Agricultural Productivity, But Environmental Degradation: While the Industrial Revolution improved agricultural output through mechanization, it also led to significant environmental costs. The expansion of farmland to feed the growing population and provide raw materials for factories increased deforestation, soil depletion, and land degradation. ",
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
                className="carousel-container"
                animation="false"
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                index={activeIndex}
                onChange={(index) => setActiveIndex(index)}
                style={{ width: '70%', margin: 'auto' }}
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

export default Industrialitem;