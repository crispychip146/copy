import React from "react";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Prehumanera from "../components/Story/journey/Prehumanera";

const Map = () => {

  return <div>
    <p>
        hello vai this is our map 
        hope you like it
    </p>
    <Link to="/Story/journey/Prehuman">
      <Button>Next</Button>
    </Link>
  </div>;
};

export default Map;
