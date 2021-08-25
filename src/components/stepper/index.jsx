import React from "react";
import { useDispatch } from "react-redux";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  Button,
  Container,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { postBookingTicket } from "../../store/actions/booking.action";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <EventSeatIcon />,
    2: <CreditCardIcon />,
    3: <ConfirmationNumberIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    border: "1px solid #9f9f9f9f",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
  },
}));

function getStepContent(step, stepper) {
  const stepOne = stepper[0];
  const stepTwo = stepper[1];
  const stepThree = stepper[2];
  switch (step) {
    case 0:
      return <stepOne.Component />;
    case 1:
      return <stepTwo.Component />;
    case 2:
      return <stepThree.Component />;
    default:
      return <stepOne.Component />;
  }
}

export default function StepperBooking(props) {
  const { stepper, next, maLichChieu } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const dispatch = useDispatch();

  const handleNext = () => {
    if (next.length > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePayment = () => {
    dispatch(postBookingTicket(maLichChieu, next));
  };
  return (
    <Container maxWidth="md">
      <Stepper
        className={classes.stepper}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {stepper.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {label.name}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === stepper.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handlePayment} className={classes.button}>
              Thanh toán
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, stepper)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                disabled={next.length === 0}
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === stepper.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
