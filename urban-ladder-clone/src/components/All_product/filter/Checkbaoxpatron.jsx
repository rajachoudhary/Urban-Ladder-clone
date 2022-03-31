import React from 'react'

import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#1a8cff',
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    // display: 'flex',
    // flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginLeft: 0,
  },
//   label: {
//     fontSize: '.8rem',
//     fontFamily: `'Raleway', sans-serif`,
//   },
});


  

export const Checkbaoxpatron = ({handleChangeChecked,item}) => {
    const classes = useStyles();
  const { checked, label, id } = item;
  return (
    <div>
    <FormControlLabel
      classes={{
        label: classes.label,
        root: classes.wrap,
      }}
      control={
        <Checkbox
          classes={{
            checked: classes.checked,
            root: classes.root,
          }}
          size='small'
          checked={checked}
          onChange={() => handleChangeChecked(id)}
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      }
     
    />
  </div>
  )
}
