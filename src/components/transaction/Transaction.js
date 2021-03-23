import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { TransactionForm } from "./TransactionForm";
import { GlobalContext } from "../../context/GlobalState";
import { Transactionlist } from "./Transactionlist";

export const Transaction = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <TransactionForm />
      <br />
      <div>
        <Typography variant="body2">History </Typography>
        <hr />
      </div>
      {transactions.map((transaction) => (
        <Transactionlist key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};
