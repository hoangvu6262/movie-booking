import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export default function FormDialog(props) {
  const { openDialog, setOpenDialog, handleSubmit, children, ...other } = props;

  const handleClose = () => {
    setOpenDialog({
      ...openDialog,
      open: false,
    });
  };

  return (
    <Dialog open={openDialog.open} onClose={handleClose}>
      <DialogTitle>{openDialog.title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
