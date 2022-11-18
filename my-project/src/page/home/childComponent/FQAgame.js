import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FQAgame({ data }) {
  return (
    <div className="FQAgame row">
      <div className="col-5">
        <img style={{ width: "100%" }} src={data.imgFQA} />
      </div>
      <div className="col-7 col7Fqa">
        <h1 style={{ color: "#fff" }}>{data.name} FQAs</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              What new machines will be in {data.name} Forbidden West?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Aloy will be facing a variety of deadly new machines in the
              Forbidden West including the armoured Rollerback, the graceful
              Sunwing, and the acid-spitting Slitherfang, and more. Take a
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              What will the world of {data.name} Forbidden West look like?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Forbidden West will be an immersive open world, filled with
              adventure, culture, and opportunity. But it will also be vast and
              deadly, filled with ancient ruins, awe-inspiring machines, and
              hidden threats.
            </Typography>{" "}
            <Typography>
              The Living World team at Guerrilla worked on aspects of the game
              that make the world feel authentic and alive: the tribes, the
              settlements, and the people within them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Will Aloy have new weapons and abilities in {data.name} Forbidden
              West?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. Building upon the foundation of {data.name} Zero Dawn, Aloy
              will have a number of new ways to move through the world like high
              vault traversal mechanics, the ability to free climb, and swimming
              underwater which opens up new aspects of exploration.
            </Typography>
            <Typography>
              Weapons and outfits are also even more potent than before, and new
              tools like the Pullcaster and Shieldwing make her more agile
              during both exploration and the inevitable battles she’ll be
              fighting in the West.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
