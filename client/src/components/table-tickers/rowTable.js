import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const RowTable = ({ props }) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent,
    dividend,
    yieldData,
  } = props;
  const styleStatus = (status) => {
    return {
      color: status ? "#06AB00" : "#FC1402",
      fontSize: "1.3em",
    };
  };
  const minusPlus = (status) => {
    if (status) {
      return "+";
    } else {
      return "-";
    }
  };
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <p
          style={{
            fontWeigth: 200,
            fontSize: "1.2em",
          }}
        >
          &#9733; {ticker}
        </p>
      </StyledTableCell>
      <StyledTableCell align="right">
        <p>{exchange}</p>
      </StyledTableCell>
      <StyledTableCell align="right">
        <p style={styleStatus(price.status)}>
          {minusPlus(price.status)}
          {price.value}&#36;
        </p>
      </StyledTableCell>
      <StyledTableCell align="right">
        <p style={styleStatus(change.status)}>
          {minusPlus(change.status)}
          {change.value}
        </p>
      </StyledTableCell>
      <StyledTableCell align="right">
        <p style={styleStatus(change_percent.status)}>
          {minusPlus(change_percent.status)}
          {change_percent.value}
        </p>
      </StyledTableCell>
      <StyledTableCell align="right">
        <p style={styleStatus(dividend.status)}>
          {minusPlus(dividend.status)}
          {dividend.value}
        </p>
      </StyledTableCell>
      <StyledTableCell align="right">
        <p style={styleStatus(yieldData.status)}>
          {minusPlus(yieldData.status)}
          {yieldData.value}
        </p>
      </StyledTableCell>
    </StyledTableRow>
  );
};
export default RowTable;
