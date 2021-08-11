import React from "react";
import { Modal, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iframe: {
    height: 550,
    width: 850,
  },
}));

export default function ModalPopupVideo(props) {
  const classes = useStyles();
  const { open, close, source } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <iframe
          name="trailer-video"
          src={source}
          className={classes.iframe}
        ></iframe>
      </Modal>
    </div>
  );
}
