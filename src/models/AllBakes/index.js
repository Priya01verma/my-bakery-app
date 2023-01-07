import { GET_ALL_BAKES, FAVOURITE_BAKE } from "./action";
import backeryData from "./bakeryContent.json";

const initialState = {
  allBakeryData: backeryData,
  favouriteBake: [],
};

const AllBakes = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BAKES:
      return {
        ...state,
        allBakeryData: backeryData,
      };
    case FAVOURITE_BAKE:
      return {
        ...state,
        favouriteBake: [...state.favouriteBake, action.favouriteBake],
      };
    default:
      return state;
  }
};
export default AllBakes;
