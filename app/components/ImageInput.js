import React, { useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import Icon from "./Icon";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    console.log(result);

    if (!result.granted)
      alert("You need to enable permission to acces the library.");

    // const permission = await Permissions.getAsync(Permissions.MEDIA_LIBRARY);
    // if (permission.status !== "granted") {
    //   const newPermission = await Permissions.askAsync(
    //     Permissions.
    //   );
    //   console.log(newPermission);

    // }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        { text: "no" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        {!imageUri && (
          <Icon
            backgroundColor={colors.light}
            iconColor={colors.medium}
            name="camera"
            size={100}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "100%" },
});

export default ImageInput;
