import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import AllBakeryData from "./AllBakeryData";
import FavouriteBake from "./FavouriteBake";
import Homepage from "./Homepage";
import { useDispatch } from "react-redux";
import { LOGIN_CHECK } from "../../models/Auth/types";

const Navigatepage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("login")) {
      dispatch({
        type: LOGIN_CHECK,
      });
    }
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/all-bakes" component={AllBakeryData} />
        <Route exact path="/favourites" component={FavouriteBake} />
      </Switch>
    </Fragment>
  );
};
export default Navigatepage;
