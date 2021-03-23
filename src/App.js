import {
  createMuiTheme,
  CssBaseline,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpence } from "./components/IncomeExpence";
import { Transaction } from "./components/transaction/Transaction";
import { GlobalProvider } from "./context/GlobalState";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <div className={classes.root}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Balance />
            </Grid>
            <Grid item xs={12}>
              <IncomeExpence />
            </Grid>
            <Grid item xs={12}>
              <Transaction />
            </Grid>
          </Grid>
        </div>
        <CssBaseline />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
