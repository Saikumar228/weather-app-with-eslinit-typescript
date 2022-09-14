/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getItem } from "../helpers/SessionStorage";
import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./actionTypes";

export const initState = {
  isLoading: !getItem("weather"),
  weatherData: getItem("weather") ? getItem("weather").weatherData : {},
  forcastData: getItem("weather") ? getItem("weather").forcastData : [],
  isError: false,
};
export type initStateType = {
  type: string;
  payload: {
    weatherData?: Record<string, unknown>;
    forcastData?: Record<string, unknown>;
  };
};

export const reducer = (
  state = initState,
  { type, payload }: initStateType,
) => {
  console.log(payload);
  switch (type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        weatherData: payload.weatherData,
        forcastData: payload.forcastData,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
