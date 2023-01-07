import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ItemCard from "../component/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteBake } from "../../models/AllBakes/action";

const AllBakeryData = () => {
  const [initialRequestMade, setInitialRequestMade] = useState(false);
  const dispatch = useDispatch();

  const { allBakeryData = [], favouriteBake = [] } = useSelector(
    (state) => state.AllBakes
  );

  console.log("priya verma", allBakeryData, favouriteBake);

  const handleFavourite = (bakeData) => {
    if (favouriteBake.length === 0) {
      dispatch(getFavouriteBake(bakeData));
      return 0;
    }
    if (favouriteBake.length > 0) {
      for (let i = 0; i < favouriteBake.length; i++) {
        let favBakeId = favouriteBake[i].id;
        if (favBakeId === bakeData.id) {
          alert("you cannot select the same cakes as favourite");
          return 0;
        } else {
          dispatch(getFavouriteBake(bakeData));
          return 0;
        }
      }
    }
  };

  const classes = useStyles();
  return (
    <Box p={4}>
      {allBakeryData.length !== 0 ? (
        <Box pt={3}>
          <Grid container spacing={2}>
            {allBakeryData.map((itemData, index) => {
              return (
                <Grid key={index} item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <ItemCard
                    itemData={itemData}
                    showCheckBoxButton={true}
                    onClick={() => handleFavourite(itemData)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          className={classes.root}
          alignItems={"center"}
        >
          <Box>{initialRequestMade ? "No Data Found" : "loading...."}</Box>
        </Box>
      )}
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 150px)",
  },
}));
export default AllBakeryData;
