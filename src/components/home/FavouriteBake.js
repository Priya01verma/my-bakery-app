import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../component/ItemCard";
import { Grid, Box } from "@material-ui/core";

const FavouriteBake = () => {
  const { favouriteBake = [] } = useSelector(
    ({ AllBakes: { favouriteBake } }) => ({ favouriteBake })
  );

  return (
    <>
      {favouriteBake.length !== 0 ? (
        <Box p={4}>
          <h1>Wishlist cake</h1>
          <Box pt={3}>
            <Grid container spacing={2}>
              {favouriteBake.map((itemData, index) => {
                return (
                  <Grid key={index} item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <ItemCard itemData={itemData} showCheckBoxButton={false} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ height: "80vh" }}
        >
          <Box>Kindly Add your favourite Cakes brands</Box>
        </Box>
      )}
    </>
  );
};
export default FavouriteBake;
