import { Typography, Button, Paper, SvgIcon } from "@material-ui/core";
import LaunchpadComponent from "../../components/ssLaunchpad/ssLaunchpad";

import React, { useState, useEffect } from "react";
import { ACTIONS } from "../../stores/constants/constants";
import stores from "../../stores";
import Unlock from "../../components/unlock/unlockModal";

import classes from "./launchpad.module.css";

function Launchpad({ changeTheme }) {
  const [account, setAccount] = useState(
    stores.accountStore.getStore("account")
  );
  const [unlockOpen, setUnlockOpen] = useState(false);

  useEffect(() => {
    const accountConfigure = () => {
      setAccount(stores.accountStore.getStore("account"));
      closeUnlock();
    };
    const connectWallet = () => {
      onAddressClicked();
    };

    stores.emitter.on(ACTIONS.ACCOUNT_CONFIGURED, accountConfigure);
    stores.emitter.on(ACTIONS.CONNECT_WALLET, connectWallet);
    return () => {
      stores.emitter.removeListener(
        ACTIONS.ACCOUNT_CONFIGURED,
        accountConfigure
      );
      stores.emitter.removeListener(ACTIONS.CONNECT_WALLET, connectWallet);
    };
  }, []);

  const onAddressClicked = () => {
    setUnlockOpen(true);
  };

  const closeUnlock = () => {
    setUnlockOpen(false);
  };

  return (
    <div className={classes.ffContainer}>
      <LaunchpadComponent />
      {/* {account && account.address ? (
        <SwapComponent />
      ) : (
      <Paper className={classes.notConnectedContent}>
        <div className={classes.sphere}></div>
        <div className={classes.contentFloat}>
          <Typography className={classes.mainHeadingNC} variant="h1">
            Swap
          </Typography>
          <Typography className={classes.mainDescNC} variant="body2">
            Swap between Solidly supported stable and volatile assets.
          </Typography>
          <Button
            disableElevation
            className={classes.buttonConnect}
            variant="contained"
            onClick={onAddressClicked}
          >
            {account && account.address && (
              <div
                className={`${classes.accountIcon} ${classes.metamask}`}
              ></div>
            )}
            <Typography>Connect Wallet to Continue</Typography>
          </Button>
        </div>
      </Paper>
       )}
      {unlockOpen && <Unlock modalOpen={unlockOpen} closeModal={closeUnlock} />} */}
    </div>
  );
}

export default Launchpad;
