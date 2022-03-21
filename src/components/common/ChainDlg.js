import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { setChainId } from '../../reducers/networkSlice';

import { network } from '../../constants/network';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function ChainDlg(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (net) => {
    dispatch(setChainId(net.chainId));
    onClose(net.chainId);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select Chain</DialogTitle>
      <List>
        {[network[3], network[97]].map((net, i) => (
          <ListItem button onClick={() => handleListItemClick(net)} key={i}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={net.chainName} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default ChainDlg;