import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

import TextField from '@material-ui/core/TextField';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) =>({ 
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  depositContext: {
    flex: 1,
  },
},
}));
export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>やりたいことの詳細</Title>
      
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="やりたいこと" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="詳細" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="目的" />
      </form>
      <Typography color="textSecondary" className={classes.depositContext}>
        いつやるか
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        ご褒美
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        カテゴリー
      </Typography>

      
    </React.Fragment>
  );
}