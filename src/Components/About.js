import Zay from "./Zay";
import Sharukh from "./Sharukh";
import { Card } from "@mui/material";
import classes from "./About.module.css"

export default function About() {
  return (
    <div>

      <Card id={classes.aboutpage777}><div><div>YouTube Clone Project</div>
      <br/> 
      <p>This Project is a React application that uses the YouTube  API V3. We used Material UI icons, youtube-react package, and the good ol' Javascript, CSS, and HTML.</p>

</div></Card>
    <div className="about-FELLOWS">
      <div className="fella1">
        <Zay />
      </div>
      <div className="fella2">
        <Sharukh />
      </div>
    </div></div>
  );
}
