import { Button, Grid, Typography } from "@material-ui/core";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Link from "next/link";
import classes from "./ssLaunchpad.module.css";

function LaunchpadContent() {
  return (
    <>
      <div>
        <Typography className={classes.smallerText} variant="small">
          Perpy is a fully on-chain protocol allowing access to social trading
          on decentralized perpetual exchanges » « As an Investor, Perpy allows
          you to copy the most successful traders and as a Trader, Perpy allows
          you to monetize your trading skills by getting a performance fee from
          your investors. Perpy offers full transparency on the traders
          performance as well as how the strategies are structured and operated.
        </Typography>
      </div>
      <div>
        <Typography className={classes.smallerText} variant="small">
          $PRY is the native token of Perpy, it has a hard capped supply and has
          deflationary properties over time. $PRY is designed as a 100% Real
          Yield token that serves many key functions within Perpy like Protocol
          Revenu Sharing, Fee Rebates, Governance and Social Utilities.
        </Typography>
      </div>
      <div>
        <Link href="/launchpad">
          <Typography className={classes.smallerText} variant="small">
            <KeyboardBackspaceIcon className={classes.mr8} /> Back to listing
          </Typography>
        </Link>
      </div>
      <div className={classes.mainImage}>
        <img
          src="/images/perpy-banner-genesis.jpg"
          alt="img"
          className={classes.imageBanner}
        ></img>
      </div>
      <div>
        <Typography className={classes.smallerText} variant="small">
          Please ensure you understand the public sale mechanics and terms
          before proceeding, deposited amounts CANNOT be withdrawn.
        </Typography>
      </div>
      <div>
        <Typography className={classes.smallerText} variant="small">
          This is a fixed-price sale, every participant will have the
          opportunity to buy tokens at the same price of $0.02 for a fully
          diluted valuation (FDV) of $20M.
        </Typography>
      </div>
      <div>
        <Typography className={classes.smallerText} variant="small">
          {/* <ReportGmailerrorredIcon /> */}
          This sale has a $2M soft cap, every participant will be refunded and
          token's distribution cancelled if this cap is not reached by the end
          of the second stage.
        </Typography>
      </div>
      <div className={classes.roundedDiv}>
        <div className={classes.borderDottedBottom}>
          <Grid container spacing={2} className={classes.gridItem}>
            <Grid item xs={2}>
              <span>Whitelist stage</span>
            </Grid>
            <Grid item xs={1}>
              <ArrowRightAltIcon className={classes.iconElement} />
            </Grid>
            <Grid item xs={2}>
              <span>Public stage</span>
            </Grid>
            <Grid item xs={1}>
              <ArrowRightAltIcon className={classes.iconElement} />
            </Grid>
            <Grid item xs={2}>
              <span>End</span>
            </Grid>
            <Grid item xs={1}>
              <ArrowRightAltIcon className={classes.iconElement} />
            </Grid>
            <Grid item xs={2}>
              <span>Claims</span>
            </Grid>
          </Grid>
        </div>
        <div className={classes.gridHeading}>
          <span>Public sale has ended - Contributions are now claimable</span>
        </div>
      </div>

      <div>
        <Grid container spacing={4} className={classes.gridItem}>
          <Grid item xs={12} md={4}>
            <div className={classes.roundedDiv}>
              <div className={classes.claimHeading}>
                <span>Claim</span>
              </div>
              <Button variant="contained" size="large" disabled fullWidth>
                Not Connected
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.roundedDiv}>
              <Grid container spacing={3} className={classes.gridItem}>
                <Grid item xs={12} md={6}>
                  <div className={classes.claimListContainer}>
                    <AccountBalanceIcon className={classes.goldIcon} />
                    <div>
                      <div className={classes.gray}>Total raised / Hardcap</div>
                      <h3 className={classes.iconHeading}>
                        $5,000,000 / $5,000,000
                      </h3>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.claimListContainer}>
                    <img
                      src="/tokens/pry.svg"
                      alt="pry icon"
                      className={classes.goldIcon}
                      width={40}
                    />
                    <div>
                      <div className={classes.gray}>$PRY price</div>
                      <h3 className={classes.iconHeading}>$0.02</h3>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.claimListContainer}>
                    <MonetizationOnIcon className={classes.goldIcon} />
                    <div>
                      <div className={classes.gray}>Circ. marketcap</div>
                      <h3 className={classes.iconHeading}>$5.75M</h3>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.claimListContainer}>
                    <AccountBalanceWalletIcon className={classes.goldIcon} />
                    <div>
                      <div className={classes.gray}>FDV</div>
                      <h3 className={classes.iconHeading}>$20M</h3>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.roundedDiv}>
              <div className={classes.claimListContainer}>
                <img
                  src="/tokens/pry.svg"
                  alt="pry icon"
                  className={classes.goldIcon}
                  width={24}
                />
                <h3 className={classes.iconHeading}>How price is determined</h3>
              </div>
              <div className={classes.leftText}>
                <p className={classes.gray}>
                  You can contribute with $USDC in exchange for $PRY tokens,
                  which are to be claimed 24h after the end of the sale.
                </p>
                <p className={classes.gray}>
                  The tokens you will receive will have the exact same $ value
                  than your contribution.
                </p>
                <p className={classes.gray}>
                  Up to 250,000,000 $PRY (out of a 1,000,000,000 total supply)
                  will be allocated to the sale.
                </p>
                <p className={classes.gray}>
                  Every unsold token will return to the treasury and be subject
                  to a 18-months linear vesting (6-months cliff).
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.roundedDiv}>
              <div className={classes.claimListContainer}>
                <TrendingUpIcon
                  className={`${classes.goldIcon} ${classes.small}`}
                />
                <h3 className={classes.iconHeading}>How price is determined</h3>
              </div>
              <div className={classes.leftText}>
                <p className={classes.gray}>
                  This sale will take place in two different stages.
                </p>
                <p className={classes.gray}>
                  <a href="#" className={classes.gray}>
                    STAGE 1{" "}
                  </a>
                  : During the first 24h, only whitelisted addresses can
                  participate.
                </p>
                <p className={classes.gray}>
                  <a href="#" className={classes.gray}>
                    STAGE 2{" "}
                  </a>
                  : Starting Mar 17 @ 2pm UTC, other participants can purchase
                  the remaining tokens on a first-come, first-served basis. This
                  stage will last for 3 days.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.roundedDiv}>
              <div className={classes.claimListContainer}>
                <AccountBalanceWalletIcon
                  className={`${classes.goldIcon} ${classes.small}`}
                />
                <h3 className={classes.iconHeading}>How price is determined</h3>
              </div>
              <div className={classes.leftText}>
                <p className={classes.gray}>
                  The public sale will last until Mar 20th @ 6pm UTC.
                </p>
                <p className={classes.gray}>
                  Starting Mar 21th @ 6pm UTC, the purchased tokens will be
                  entirely and directly claimable from this same page, at the
                  exact same time as trading starts.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.leftText}>
              <p className={classes.red}>
                Camelot is a suite of decentralized contracts built to support
                Arbitrum native builders. As a permissionless protocol, Camelot
                bears no responsibility for any tokens purchased using its
                contracts. All users are taking full responsibility that they
                are aware of the relevant risks involved, and that they are
                participating for a token that is completely independent and not
                associated with Camelot in any way. Social media posts and
                visible information on the Camelot app in no way counts as an
                endorsement of a protocol by the Camelot team, and nothing
                posted or shared in any Camelot media is a recommendation or
                financial advice.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LaunchpadContent;
