import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import { categories } from '../../constants/general';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,
    minWidth: 200,
    marginLeft: 40,
    marginRight: 40
  },
  selectEmpty: {
    marginTop: 2,
  },
}));

const CategoryDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open, categoryChange } = props;
  const handleClose = () => {
    onClose();
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby="Category" open={open}>
      <DialogTitle id="simple-dialog-title">Select Category</DialogTitle>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          onChange={categoryChange}
        >
          {
            categories.map((category, i) => (
              <MenuItem key={i} value={category}>{category}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button onClick={handleClose}  variant="contained">ok</Button>
      </FormControl>
    </Dialog>
  )
}

export default CategoryDialog;