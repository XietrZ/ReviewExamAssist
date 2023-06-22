import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const contextValue = {};
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
