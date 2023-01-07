import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Login from "../component/Login";
import DialogContent from "@material-ui/core/DialogContent";
import Signup from "../component/Signup";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Homepage = ({ isAuthenticated }) => {
  const classes = useStyles();

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  const handleLoginClick = () => {
    setOpenLogin(true);
  };
  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleSignupClick = () => {
    setOpenSignup(true);
  };
  const handleSignupClose = () => {
    setOpenSignup(false);
  };

  if (isAuthenticated) {
    return <Redirect to="/all-bakes" />;
  }

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjk91JYZP-C50mt_UvPGb3rB3bm4AkfAAmrw&usqp=CAU"
        alt="favourtie"
        width="100%"
        className={classes.image}
      />
      <div className={classes.buttonParent}>
        <div>
          <Button
            variant="contained"
            className={classes.login}
            onClick={handleLoginClick}
            style={{ marginBottom: 30 }}
          >
            Login
          </Button>
          <Dialog onClose={handleLoginClose} open={openLogin}>
            <DialogContent className={classes.loginDialogBox}>
              <Login />
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <Button
            variant="contained"
            className={classes.login}
            onClick={handleSignupClick}
          >
            SignUp
          </Button>
          <Dialog onClose={handleSignupClose} open={openSignup}>
            <DialogContent className={classes.signupDialogBox}>
              <Signup />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  login: {
    color: "white",
    width: 200,
    height: 50,
    backgroundColor: "#68330a",
  },
  image: {
    [theme.breakpoints.down(426)]: {
      height: 400,
    },
    height: "100vh",
  },
  buttonParent: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    flexWrap: "wrap",
    [theme.breakpoints.down(426)]: {
      flexDirection: "column",
    },
  },

  loginDialogBox: {
    width: 300,
    height: 400,
    display: "flex",
    justifyContent: "center",
  },
  signupDialogBox: {
    width: 300,
    height: 465,
    display: "flex",
    justifyContent: "center",
  },
}));

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(Homepage);
