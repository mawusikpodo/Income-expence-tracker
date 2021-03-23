import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import { Close, EditOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import ActionButton from "../controls/ActionButton";
import { GlobalContext } from "../../context/GlobalState";

const useStyeles = makeStyles((theme) => ({
  root: {
    padding: 1,
    display: "flex",
  },
}));

export const Transactionlist = (props) => {
  const classes = useStyeles();
  const { transaction } = props;
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div className={classes.root}>
      <Card style={{ width: "100%" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              {transaction.description}
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              {sign}${Math.abs(transaction.amount)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* <ActionButton color="primary">
        <EditOutlined fontSize="small" />
      </ActionButton> */}
      <ActionButton
        color="secondary"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <Close fontSize="small" />
      </ActionButton>
    </div>
  );
};
