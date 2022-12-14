import GitHubIcon from "@mui/icons-material/GitHub";
import { Card } from "@mui/material";
import classes from "./Zay.module.css"

export default function ZayContact() {
  return (
    <Card id={classes.zay}>

    <div>
      <strong>Zay's Contact Information</strong>

      <h2>Contact Card</h2>
      <p>
        <span>📧 EMAIL:</span>
        <a href="mailto:isaiah.lors7@gmail.com">Isaiah Lors</a>{" "}
      </p>
      <p>
        <span>
          <GitHubIcon />
        </span>
        <a href="https://github.com/ZayLpursuit">Isaiah Lors</a>{" "}
      </p>
    </div>
    </Card>
  );
}
