import React from "react";
import "../style/Prehumanera.css";
import image1 from "../resources/prehumanera/image1.jpg";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

function Prehumanera() {
  
  return (
    <div id="prehumanera">
      <h1 class="d-flex justify-content-center">
        Pre Human Era : The Ancient Earth
      </h1>
      <br></br>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        In the early days of Earth, the atmosphere was thick with carbon dioxide
        (CO2), nitrogen, and water vapor. A violent world of erupting volcanoes
        and crashing meteors shaped its surface. Yet, in the depths of its
        oceans, life began to stir. Among the first inhabitants were tiny
        cyanobacteria, pioneering microbes that thrived in the warm waters.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        These microorganisms discovered the power of photosynthesis, using
        sunlight to convert CO2 and water into energy, releasing oxygen as a
        byproduct. As cyanobacteria multiplied, they began to transform the
        atmosphere. The Great Oxygenation Event unfolded, where oxygen levels
        slowly rose, while CO2 levels dropped. This pivotal change sparked a
        dramatic shift in Earth’s climate.
      </p>
      <br></br>
      <p style={{ color: "rgb(15, 16, 88)" }}>
        As CO2 thinned, the greenhouse effect weakened, allowing the planet to
        cool. Temperatures stabilized, and a diverse array of environments
        emerged. Lush wetlands and expansive forests flourished, teeming with
        life. As oxygen became abundant, early plants spread across land and
        water, absorbing CO2 and releasing even more oxygen into the air.
      </p>
      <br></br>
      <div className="paragraph-image-row">
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <ul
            style={{
              height: "auto",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <li style={{ fontSize: "1.4rem", textAlign: "justify",lineHeight:'1.5' }}>
              1. Cyanobacteria, which played a crucial role in photosynthesis
            </li>
            <li style={{ fontSize: "1.4rem", textAlign: "justify",lineHeight:'1.5' }}>
              2. Archaea, adapted to survive in extreme conditions.
            </li>
            <li style={{ fontSize: "1.4rem", textAlign: "justify",lineHeight:'1.5' }}>
              3. Single-Celled Eukaryotes, contributed to the early ecosystems
            </li>
            <li style={{ fontSize: "1.4rem", textAlign: "justify",lineHeight:'1.5' }}>
              4. Methanogens, contributing to early greenhouse gas levels and
                influencing climate.
            </li>
          </ul>
          <p>
            This burgeoning ecosystem fostered the rise of complex organisms.
            Fish swam in the nutrient-rich oceans, while insects crawled across
            the vibrant, green landscapes. The planet’s transformation was
            profound; the once-chaotic world had become a thriving biosphere,
            interconnected and alive. Thanks to the humble cyanobacteria, Earth
            had begun its journey toward a more temperate, balanced climate,
            paving the way for the diverse life forms that would one day call it
            home.
          </p>
        </div>
        <div className="side-image-div">
          <img src={image1} style={{ width: "100%", height: "100%" }}></img>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <ButtonGroup variant="contained">
          <Link to="/Story/journey/Prehuman">
            <Button>Previous</Button>
          </Link>
          <Link to="/Story/journey/PreIndustry">
            <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Prehumanera;
