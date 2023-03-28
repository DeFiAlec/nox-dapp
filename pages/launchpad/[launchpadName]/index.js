import React from "react";
import LaunchpadDetail from "../../../components/ssLaunchpadDetail/ssLaunchpadDetail";
import classes from "./launchpad.module.css";

function Pair({ changeTheme }) {
  return (
    <div className={classes.ffContainer}>
      <LaunchpadDetail />
    </div>
  );
}

export default Pair;
