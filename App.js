import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import colors from "./app/config/colors";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    // result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // if (result.status === "granted")
    //   alert("You need to enable permission to acces the library.");

    const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (permission.status !== "granted") {
      const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (newPermission.status === "granted") {
        //its granted.
      }
    } else {
      alert("You need to enable permission to acces the library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
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
