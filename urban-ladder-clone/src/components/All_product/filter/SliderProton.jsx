import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '90%',
    margin : "auto"
  },
  thumb: {
    color: 'lightgrey',
    padding :`8px`
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
    height: `8px`
  },
  track: {
    color: '#ed7745',
    height: `8px`
  },
});

const SliderProton = ({ value, changedPrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changedPrice}
       /* valueLabelDisplay='on'*/
        min={500}
        max={100000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default SliderProton;
