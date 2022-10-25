import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});
const MessageInputField = () => {
  const calsses = useStyles();
  return (
    <div className={calsses.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar />
        </Grid>
        <Grid xs={10}>入力してください</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
