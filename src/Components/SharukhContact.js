import GitHubIcon from "@mui/icons-material/GitHub";
import { Card } from "@mui/material";
import classes from "./Sharukh.module.css";

export default function SharukhContact() {
  return (

    <Card id={classes.sharukh}>

    <div>
      <strong>Sharukh's Contact Information</strong>

      <h2>Contact Card</h2>
      <p>
        <span>📧 EMAIL:</span>
        <a href="mailto:sharukh.g.velupillai@gmail.com">
          Sharukh G. Velupillai
        </a>{" "}
      </p>
      <p>
        <span>
          <GitHubIcon />
        </span>
        <a href="https://github.com/SharukhGV">Sharukh Velupillai</a>{" "}
      </p>
    </div>
    </Card>
  );
}
