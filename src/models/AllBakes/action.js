export const GET_ALL_BAKES = "GET_ALL_BAKES";
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const FAVOURITE_BAKE = "FAVOURITE_BAKE";

export function getFavouriteBake(data) {
  return (dispatch) =>
    dispatch({
      type: FAVOURITE_BAKE,
      favouriteBake: data,
    });
}
