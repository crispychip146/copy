import React from 'react';
import '../style/PreIndustrialEra.css';
import Button from '@mui/material/Button';
import Preindustrialitem from './Preindustrialitem';
import { ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function PreIndustrialEra() {

    const navigate = useNavigate()

    const navigateNext = () => {
        navigate("/IndustrialEra")
    }

    const navigatePrevious = () => {
        navigate("/Prehumanera")

    }

    return (
        <div id="preindustrialera">
            <h1>Pre Industrial Era : Early Human Impact</h1>
            <br></br>
            <br></br>
            <p style={{ color: "rgb(15, 16, 88)" }}>The Earth had always spoken in whispers. For millennia, its voice was the rustle of the wind through forests, the trickle of rivers, and the crack of glaciers as they inched across the land. It was a world untouched by the hands of machines, where humans lived in rhythm with the seasons, their lives woven into the delicate tapestry of nature’s balance. This was the Pre-Industrial Era — a time when the sun and the soil ruled over human existence, and the greatest force was not invention, but adaptation.
            </p>
            <br></br>
            <p style={{ color: "rgb(15, 16, 88)", marginTop: '15px', marginBottom: '15px' }}>In this world, a small village nestled at the foot of a mountain thrived, its people in tune with the cycle of the earth. The farmers, with their weathered hands, sowed seeds in the spring, hoping for the kiss of rain and the warmth of the sun. They relied on the fickle sky to nurture their crops, understanding that nature could be both generous and merciless. Some years, the fields flourished with golden wheat that swayed like waves in the breeze, while other years, cold winds from the mountains would steal their harvest in a single night.</p>
            <br></br>
            <p style={{ color: "rgb(15, 16, 88)", marginTop: '15px', marginBottom: '15px' }}>In the distance, the river ran steady, carrying with it the whispers of a thousand years of stories. It was the village’s lifeline, providing water for crops and fishing grounds for sustenance. The villagers would gather at its banks, exchanging tales of ancient floods and droughts, of years when the river ran dry and the soil cracked beneath their feet. </p>
            <br></br>
            <Preindustrialitem />
            <br></br>
            <p>For generations, families passed down stories of survival in the face of nature’s fury—crops lost to sudden frosts, fields drowned by unexpected storms. The elders spoke of resilience, of how they learned to adapt, building stronger homes and refining their farming methods. They watched the skies like ancient texts, attuned to nature’s rhythms, finding harmony in its unpredictability. Yet, beyond the familiar horizon, changes brewed. Across distant seas, new inventions and ideas were emerging, casting shadows over the village's way of life. Unaware of the approaching tide, they continued their timeless dance with nature, not knowing their world stood on the brink of an irreversible transformation.</p>
            <br></br>
            <p>The Pre-Industrial Era was drawing to a close, though those living within it could not yet see the approaching dawn of a new world. The Earth’s whispers were about to be drowned out by the roar of machines, the rhythm of nature replaced by the hum of industry. But for now, in the village by the river, the people still lived by the rise and fall of the sun, the turning of the seasons, and the delicate balance between survival and surrender to the forces of nature. Little did they know, the winds of change were already in motion.</p>
            <div style={{ textAlign: "right" }}>
                <ButtonGroup variant="contained">
                    <Button onClick={navigatePrevious}>Previous</Button>
                    <Button onClick={navigateNext}>Next</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default PreIndustrialEra;
