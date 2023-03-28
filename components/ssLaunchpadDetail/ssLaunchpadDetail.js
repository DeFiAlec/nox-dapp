import { Typography } from "@material-ui/core";
import LaunchpadContent from "./LaunchpadContent";
import classes from "./ssLaunchpad.module.css";

function LaunchpadDetail() {
  return (
    <div className={classes.newSwapContainer}>
      <div className={classes.tableTitleContainer}>
        <div>
          <Typography className={classes.mainHeadingNC} variant="h1">
            Perpy sale
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
      <LaunchpadContent />
    </div>
  );
}

export default LaunchpadDetail;
