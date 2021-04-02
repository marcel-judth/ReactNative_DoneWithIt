import React, { useState } from "react";
import { StyleSheet } from "react-native";

import colors from "./app/config/colors";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/forms/ImageInputList";
import ListEditScreen from "./app/screens/ListEditScreen";

export default function App() {
  return <ListEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    color: colors.primary,
    backgroundColor: "blue",
  },
});
