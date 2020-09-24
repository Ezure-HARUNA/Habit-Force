import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import { spacing } from '@material-ui/system';

// +
import Typography from '@material-ui/core/Typography';
// +

// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const theme = {
    spacing: 8,
  }

const useStyles = makeStyles((theme) => ({
    
    fixedHeight: {
        height: 120,
        // margin: 20,
      },
    root: {
    flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

 


export default function Chart() {
    const theme = useTheme();
    const classes = useStyles(); 
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    // checkbox 
    const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
        <Title>やりたいことリスト</Title>
        <Typography color="textSecondary" >
            ※できるか、でなく、やりたいか、で書く！
        </Typography>
         <Grid item xs={12} md={12} lg={6} container spacing={3}>
        <Paper m={5} p={5}>
         
         <FormControlLabel
             control={
                 <Checkbox
                     checked={state.checkedB}
                     onChange={handleChange}
                     name="checkedB"
                     color="primary"
                />
            }
            label="筋トレ30分"
        />
         </Paper>

         <Paper m={5} p={1}>
        
         <FormControlLabel
             control={
                 <Checkbox
                     checked={state.checkedB}
                     onChange={handleChange}
                     name="checkedB"
                     color="primary"
                />
            }
            label="ポートフォリオ作成"
        />
         </Paper>
         </Grid>
    </React.Fragment>
  );
}




// import React from 'react';
// import Link from 'next/link';
// import { useTheme } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
// import Title from './Title';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';


// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';




// <div>
// <Title>やりたいことリスト</Title>
// <Typography color="textSecondary" className={classes.chartContext}>
//     ※できるか、でなく、やりたいか、で書く！
// </Typography>
// <Grid container spacing={3}>
//     <Grid item xs={10} md={7} lg={8}>
//         <Paper >
//             ペーパー
//         </Paper>
//     </Grid>
// </Grid>
// <FormGroup row>
//     <FormControlLabel
//         control={
//             <Checkbox
//                 checked={state.checkedB}
//                 onChange={handleChange}
//                 name="checkedB"
//                 color="primary"
//             />
//         }
//         label="Primary"
//     />
// </FormGroup>
// </div>

// const theme = useTheme();
// const classes = useStyles(); 

//  // checkbox 
//  const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//     checkedF: true,
//     checkedG: true,
//   });

//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };