/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useReducer, ReactNode } from "react";
import { reducer, initState } from "./reducer";

type GlobalProviderProps = {
  children: ReactNode;
};
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [weatherState, weatherDispatch] = useReducer(reducer, initState);
  const weatherObject: {
    weatherState: Record<string, unknown>;
    weatherDispatch: Function;
  } = {
    weatherState,
    weatherDispatch,
  };
  console.log(weatherObject);

  return (
    <GlobalContext.Provider value={weatherObject}>
      {children}
    </GlobalContext.Provider>
  );
};
