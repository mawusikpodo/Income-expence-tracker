import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Card from "@material-ui/core/Card";
import { CardContent, Grid, Typography } from "@material-ui/core";

export const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <Card style={{ textAlign: "center" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              INCOME
              <Typography variant="body1" color="primary">
                ${income}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              EXPENCE
              <Typography variant="body1" color="secondary">
                ${expense}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
