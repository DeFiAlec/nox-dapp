import {
  FormControl,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import LaunchpadTable from "./LaunchpadTable";
// import Setup from "./setup";
import classes from "./ssLaunchpad.module.css";

function Launchpad() {
  return (
    <div className={classes.newSwapContainer}>
      <div className={classes.tableTitleContainer}>
        <div>
          <Typography className={classes.mainHeadingNC} variant="h1">
            Launchpad
          </Typography>
          <Typography className={classes.smallerText} variant="small">
            Custom-built infrastructure for Arbitrum native public sales
          </Typography>
        </div>
        <div className={classes.pricesContainer}>
          <div className={classes.priceButton}>
            <img
              src="/tokens/grail.svg"
              width={21}
              className={classes.mr8}
              alt="coin grail"
            />
            <Typography className={classes.smallerText}>$ 123</Typography>
          </div>
          <div className={classes.priceButton}>
            <Typography className={classes.smallerText}>$ 123 NOX</Typography>
          </div>
        </div>
      </div>
      <LaunchpadTable />
    </div>
  );
}

export default Launchpad;
