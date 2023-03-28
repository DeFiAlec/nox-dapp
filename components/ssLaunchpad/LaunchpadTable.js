import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import classes from "./ssLaunchpad.module.css";
import Link from "next/link";
// import { Link } from "react-router-dom";

const rows = [
  {
    name: "PRY",
    imageSrc: "/tokens/pry.svg",
    hardCap: true,
    wlStage: true,
    status: "Ended",
    totalRaised: "5000000",
    yourAllocation: 0,
  },
  {
    name: "WINR",
    imageSrc: "/tokens/winr.svg",
    hardCap: true,
    wlStage: true,
    status: "Ended",
    totalRaised: "28004310",
    yourAllocation: 0,
  },
  {
    name: "FCTR",
    imageSrc: "/tokens/fctr.jpg",
    hardCap: false,
    wlStage: false,
    status: "Ended",
    totalRaised: "7500210",
    yourAllocation: 0,
  },
  {
    name: "TROVE",
    imageSrc: "/tokens/trove.jpg",
    hardCap: false,
    wlStage: false,
    status: "Ended",
    totalRaised: "8220",
    yourAllocation: 0,
  },
  {
    name: "NEU",
    imageSrc: "/tokens/neu.svg",
    hardCap: false,
    wlStage: false,
    status: "Ended",
    totalRaised: "391456",
    yourAllocation: 0,
  },
  {
    name: "GRAIL",
    imageSrc: "/tokens/grail.svg",
    hardCap: false,
    wlStage: false,
    status: "Ended",
    totalRaised: "3796461",
    yourAllocation: 0,
  },
];

export default function LaunchpadTable() {
  return (
    <TableContainer className={classes.tableMain} component={Paper}>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        placeholder="Search"
        fullWidth
        InputProps={{
          style: { borderRadius: 4, height: "36px", fontSize: "12px" },
        }}
        className={classes.searchInput}
      />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeading}>Name</TableCell>
            <TableCell align="center" className={classes.tableHeading}>
              Hardcap
            </TableCell>
            <TableCell align="center" className={classes.tableHeading}>
              WL stage
            </TableCell>
            <TableCell align="center" className={classes.tableHeading}>
              Status
            </TableCell>
            <TableCell align="center" className={classes.tableHeading}>
              Total raised
            </TableCell>
            <TableCell align="center" className={classes.tableHeading}>
              Your allocation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Link href={`/launchpad/${row.name}`} key={row.name}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={classes.tableRow}
              >
                <TableCell component="th" scope="row">
                  <div className={classes.coinName}>
                    <img
                      src={row.imageSrc}
                      width={35}
                      className={classes.mr8}
                      alt="coin grail"
                    />
                    <div>
                      <Typography className={classes.nameHeading} variant="h4">
                        {row.name}
                      </Typography>
                      <Typography
                        className={classes.smallerText}
                        variant="small"
                      >
                        Raising USDC
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  {row.hardCap ? (
                    <CheckCircleOutlineIcon className={classes.green} />
                  ) : (
                    <HighlightOffIcon className={classes.red} />
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.wlStage ? (
                    <CheckCircleOutlineIcon className={classes.green} />
                  ) : (
                    <HighlightOffIcon className={classes.red} />
                  )}
                </TableCell>
                <TableCell
                  align="center"
                  className={
                    row.status !== "Ended" ? classes.green : classes.red
                  }
                >
                  {row.status}
                </TableCell>
                <TableCell align="center">{row.totalRaised} USDT</TableCell>
                <TableCell align="center">{row.yourAllocation}</TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
