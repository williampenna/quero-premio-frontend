import React from 'react';
import { Dialog } from '@material-ui/core';
import Form from './Form';

const ModalDialog = ({ open, handleClose }: {open: any, handleClose: any}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;