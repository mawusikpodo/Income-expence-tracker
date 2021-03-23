import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  newButton: {
    width: "100%",
  },
}));

export const TransactionForm = () => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className={classes.root} style={{ spacing: 20 }}>
      <div>
        <Typography variant="body2">Add new transaction</Typography>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={description}
          label="Description"
          variant="outlined"
          onChange={handleDescriptionChange}
        />
        &nbsp;
        <TextField
          value={amount}
          onChange={handleAmountChange}
          label="Amount (add ' - ' to expense)"
          variant="outlined"
        />
        &nbsp;
        <Button
          className={classes.newButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Transaction
        </Button>
      </form>
    </div>
  );
};
