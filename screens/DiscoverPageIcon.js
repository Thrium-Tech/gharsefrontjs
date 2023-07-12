import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const DiscoverPageIcon = () => {
  return (
    <Image
      style={styles.discoverPageIcon}
      contentFit="cover"
      source={require("../assets/discoverpage.png")}
    />
  );
};

const styles = StyleSheet.create({
  discoverPageIcon: {
    borderRadius: Border.br_27xl,
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default DiscoverPageIcon;
