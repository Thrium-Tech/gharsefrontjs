import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const RestaurantSearch = () => {
  return (
    <View style={styles.restaurantSearch}>
      <Text
        style={[styles.bramleaSandalwood, styles.searchMcdonaldsTypo]}
      >{`Bramlea & Sandalwood`}</Text>
      <Image
        style={styles.vuesaxlinearlocationIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlinearlocation2.png")}
      />
      <Text style={[styles.searchMcdonalds, styles.searchMcdonaldsTypo]}>
        Search McDonald’s
      </Text>
      <TextInput
        style={[styles.restaurantSearchChild, styles.statusIconsFlexBox]}
        placeholder="Search Food, Restaurants etc."
        placeholderTextColor="#b3bfcb"
      />
      <Text style={styles.popularKeywords}>Popular Keywords</Text>
      <Pressable style={[styles.o, styles.wrapperFlexBox1]}>
        <Text style={[styles.jain, styles.jainTypo]}>Jain</Text>
      </Pressable>
      <Pressable style={[styles.marathiWrapper, styles.wrapperFlexBox1]}>
        <Text style={[styles.marathi, styles.jainTypo]}>Marathi</Text>
      </Pressable>
      <Pressable style={[styles.hashBrownsWrapper, styles.wrapperFlexBox1]}>
        <Text style={[styles.jain, styles.jainTypo]}>Hash Browns</Text>
      </Pressable>
      <Pressable style={[styles.happyMealWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.jain, styles.jainTypo]}>Happy Meal</Text>
      </Pressable>
      <Pressable
        style={[styles.grilledChickenSandwichWrapper, styles.wrapperFlexBox]}
      >
        <Text style={[styles.grilledChickenSandwich, styles.jainTypo]}>
          Grilled Chicken Sandwich
        </Text>
      </Pressable>
      <View style={[styles.restaurantSearchItem, styles.notchIconPosition]} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.back}>Back</Text>
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.statusIconsFlexBox]}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchMcdonaldsTypo: {
    color: Color.dark100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  statusIconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  wrapperFlexBox1: {
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_31xl,
    top: 294,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  jainTypo: {
    color: Color.light100,
    lineHeight: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    letterSpacing: -0.1,
    fontSize: FontSize.paragraphMedium_size,
  },
  wrapperFlexBox: {
    top: 346,
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  notchIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  bramleaSandalwood: {
    top: 149,
    left: 38,
    lineHeight: 23,
    textAlign: "left",
    letterSpacing: -0.1,
    fontSize: FontSize.paragraphMedium_size,
    color: Color.dark100,
  },
  vuesaxlinearlocationIcon: {
    top: 154,
    width: 13,
    height: 13,
    left: 21,
    position: "absolute",
  },
  searchMcdonalds: {
    top: 107,
    fontSize: FontSize.size_17xl,
    letterSpacing: -1.8,
    lineHeight: 42,
    left: 21,
    textAlign: "left",
  },
  restaurantSearchChild: {
    top: 184,
    borderRadius: Border.br_sm,
    backgroundColor: Color.light80,
    width: 348,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    fontSize: FontSize.size_mid,
    left: 21,
    fontFamily: FontFamily.manropeRegular,
    flexDirection: "row",
  },
  popularKeywords: {
    top: 252,
    fontSize: FontSize.size_2xl,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: 21,
    textAlign: "left",
    color: Color.dark100,
    position: "absolute",
  },
  jain: {
    textAlign: "left",
  },
  o: {
    backgroundColor: "#f4739e",
    left: 20,
  },
  marathi: {
    width: 70,
    textAlign: "left",
  },
  marathiWrapper: {
    left: 110,
    backgroundColor: "#a66bf2",
  },
  hashBrownsWrapper: {
    left: 216,
    backgroundColor: "#4eb194",
  },
  happyMealWrapper: {
    backgroundColor: "#bec05d",
    left: 20,
  },
  grilledChickenSandwich: {
    textAlign: "center",
    flex: 1,
  },
  grilledChickenSandwichWrapper: {
    left: 133,
    backgroundColor: "#ea865b",
    width: 191,
  },
  restaurantSearchItem: {
    backgroundColor: Color.gray_400,
    width: 390,
    height: 93,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
    left: 21,
    position: "absolute",
  },
  back: {
    top: 56,
    left: 58,
    lineHeight: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.dark100,
    fontSize: FontSize.paragraphMedium_size,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    right: 8,
    left: 7,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  restaurantSearch: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default RestaurantSearch;
