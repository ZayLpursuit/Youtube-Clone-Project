import { Card } from "@mui/material";
import classes from "./Zay.module.css"
export default function ZayBio() {
  return (

    <Card id={classes.zay}>

    <div className="ZayBio">
     <p><strong>Zay's Bio </strong></p> 
        I am an aspiring software engineer from Brooklyn, New York. 
        
       <p> My passions
        include drumming, playing and watching chess, boxing, and NBA
        basketball. </p>
        
       <p> I am a twin and the second child of four. I can speak 4
        languages.</p> 
        
        <p>English is my primary language, however, being of Haitian
        descent, I am fluent in Haitian-Creole. The other languages are Spanish
        and French. </p>
        
        <p>I am currently pursuing a BA in Operations Management from
        Baruch College. At 25, I view myself at the start of what will be a
        passion driven career and cant wait to put my skills to good use!</p>
    </div>
    </Card>
  );
}
