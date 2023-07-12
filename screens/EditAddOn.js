import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const EditAddOn = () => {
  const [groupCheckboxchecked, setGroupCheckboxchecked] = useState(true);
  const [ellipseCheckboxchecked, setEllipseCheckboxchecked] = useState(false);
  const [ellipseCheckbox1checked, setEllipseCheckbox1checked] = useState(false);
  const [ellipseCheckbox2checked, setEllipseCheckbox2checked] = useState(false);
  const [ellipseCheckbox3checked, setEllipseCheckbox3checked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.editAddOn}>
      <View style={[styles.editAddOnChild, styles.basePosition]} />
      <Text style={[styles.required, styles.saveTypo]}>REQUIRED</Text>
      <Text style={styles.drinks}>Drinks</Text>
      <Text style={[styles.editJuice, styles.juiceTypo]}>Edit Juice</Text>
      <View style={[styles.editAddOnInner, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame5.png")}
          />
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Fruit Punch Juice
          </Text>
          <CheckBox
            style={styles.frameChild}
            checked={groupCheckboxchecked}
            onPress={() => setGroupCheckboxchecked(!groupCheckboxchecked)}
            checkedColor="#292d32"
            containerStyle={styles.groupCheckboxLayout}
          />
        </View>
      </View>
      <View style={[styles.frameView, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame6.png")}
          />
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Orange Juice
          </Text>
          <CheckBox
            style={styles.frameItem}
            checked={ellipseCheckboxchecked}
            onPress={() => setEllipseCheckboxchecked(!ellipseCheckboxchecked)}
            checkedColor="#d5dee7"
            containerStyle={styles.ellipseCheckboxLayout}
          />
        </View>
      </View>
      <View style={[styles.editAddOnInner1, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame7.png")}
          />
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Ginger Shot Juice
          </Text>
          <CheckBox
            style={styles.frameItem}
            checked={ellipseCheckbox1checked}
            onPress={() => setEllipseCheckbox1checked(!ellipseCheckbox1checked)}
            checkedColor="#d5dee7"
            containerStyle={styles.ellipseCheckbox1Layout}
          />
        </View>
      </View>
      <View style={[styles.editAddOnInner2, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame8.png")}
          />
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Sweet Guava Juice
          </Text>
          <CheckBox
            style={styles.frameItem}
            checked={ellipseCheckbox2checked}
            onPress={() => setEllipseCheckbox2checked(!ellipseCheckbox2checked)}
            checkedColor="#d5dee7"
            containerStyle={styles.ellipseCheckbox2Layout}
          />
        </View>
      </View>
      <View style={[styles.editAddOnInner3, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <Image
            style={[styles.frameIcon4, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame9.png")}
          />
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Tangy Tomato Juice
          </Text>
          <CheckBox
            style={styles.frameItem}
            checked={ellipseCheckbox3checked}
            onPress={() => setEllipseCheckbox3checked(!ellipseCheckbox3checked)}
            checkedColor="#d5dee7"
            containerStyle={styles.ellipseCheckbox3Layout}
          />
        </View>
      </View>
      <View style={[styles.editAddOnItem, styles.editAddOnItemPosition]} />
      <View style={[styles.rectangleView, styles.editAddOnItemPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.editJuicePosition]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.westernBbq, styles.saveTypo]}>
        Western BBQ ... Meal
      </Text>
      <Pressable
        style={[styles.framePressable, styles.framePressableFlexBox]}
        onPress={() => navigation.navigate("MealFull")}
      >
        <View style={styles.framePressableFlexBox}>
          <Image
            style={styles.vuesaxboldtickCircleIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldtickcircle.png")}
          />
          <Text style={[styles.save, styles.saveTypo]}>Save</Text>
        </View>
      </Pressable>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition]}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.statusIcons, styles.frameInnerFlexBox]}>
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
          style={[styles.timeLight, styles.editJuicePosition]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  ellipseCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  ellipseCheckbox1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  ellipseCheckbox2Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  ellipseCheckbox3Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  basePosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  juiceTypo: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
  },
  frameInnerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameIconLayout: {
    width: 43,
    overflow: "hidden",
  },
  editAddOnItemPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  editJuicePosition: {
    left: 21,
    position: "absolute",
  },
  framePressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  editAddOnChild: {
    top: 93,
    backgroundColor: Color.light80,
    height: 81,
  },
  required: {
    top: 125,
    right: 21,
    fontSize: FontSize.size_xs,
    color: Color.systemGreen100,
    textAlign: "right",
    lineHeight: 16,
    fontWeight: "500",
    position: "absolute",
    letterSpacing: -0.2,
  },
  drinks: {
    top: 109,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    left: 21,
    letterSpacing: -0.2,
    position: "absolute",
  },
  editJuice: {
    top: 135,
    color: Color.dark80,
    left: 21,
    position: "absolute",
  },
  frameIcon: {
    height: 33,
  },
  fruitPunchJuice: {
    marginLeft: 2,
    color: Color.dark100,
    flex: 1,
  },
  frameChild: {
    marginLeft: 2,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  editAddOnInner: {
    top: 186,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon1: {
    height: 34,
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: "#d5dee7",
    borderWidth: 1.5,
    marginLeft: 2,
  },
  frameView: {
    top: 253,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  editAddOnInner1: {
    top: 319,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  editAddOnInner2: {
    top: 386,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon4: {
    height: 28,
  },
  editAddOnInner3: {
    top: 453,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  editAddOnItem: {
    backgroundColor: Color.gray_300,
    height: 112,
    bottom: 0,
  },
  rectangleView: {
    backgroundColor: Color.gray_400,
    height: 93,
    top: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
  },
  westernBbq: {
    top: 56,
    left: 58,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "left",
    color: Color.dark100,
    lineHeight: 16,
    fontWeight: "500",
    position: "absolute",
  },
  vuesaxboldtickCircleIcon: {
    width: 24,
    height: 24,
  },
  save: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.light100,
    marginLeft: 5,
    textAlign: "left",
  },
  framePressable: {
    marginLeft: -174,
    bottom: 30,
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.dark100,
    width: 348,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    top: 0,
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
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.black,
    top: 0,
    bottom: 0,
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    height: 34,
  },
  editAddOn: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default EditAddOn;
