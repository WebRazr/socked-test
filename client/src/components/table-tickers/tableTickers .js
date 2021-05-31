import React from "react";
import { useSelector } from "react-redux";
import Loader from "./../loader/loader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RowTable from "./rowTable";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

export default function TableTickers() {
  const store = useSelector((s) => s.arrTransform);
  const classes = useStyles();

  return (
    <>
      {store === null ? (
        <Loader />
      ) : (
        <div style={{ width: "1000px" }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ticker</StyledTableCell>
                  <StyledTableCell align="right">Exchange</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Change</StyledTableCell>
                  <StyledTableCell align="right">
                    Change_percent
                  </StyledTableCell>
                  <StyledTableCell align="right">Dividend</StyledTableCell>
                  <StyledTableCell align="right">Yield</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {store.map((e, index) => {
                  return <RowTable key={`${index}-ticker`} props={e} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
