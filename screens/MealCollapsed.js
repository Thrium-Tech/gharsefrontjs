import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const MealCollapsed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mealCollapsed}>
      <Pressable
        style={[styles.mealCollapsedChild, styles.mealPosition]}
        onPress={() => navigation.navigate("MealFull")}
      />
      <View style={[styles.mealCollapsedItem, styles.mealPosition]} />
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.required1, styles.requiredTypo]}>REQUIRED</Text>
      <View style={[styles.mealCollapsedInner, styles.mealPosition]} />
      <Text style={[styles.westernBbqCheeseburger, styles.backClr]}>
        Western BBQ Cheeseburger Meal
      </Text>
      <View style={styles.frameView} />
      <Text style={[styles.sideItem, styles.drinksTypo]}>Side Item</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editCheeseburger, styles.drinksTypo]}>
        Edit Cheeseburger
      </Text>
      <Pressable
        style={[styles.vuesaxlinearadd, styles.vuesaxlinearaddPosition]}
      >
        <Image
          style={styles.addIcon}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vuesaxlinearadd1, styles.vuesaxlinearaddPosition]}
      >
        <Image
          style={styles.addIcon}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vuesaxlinearadd2, styles.vuesaxlinearaddPosition]}
      >
        <Image
          style={styles.addIcon}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame-51.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.mealCollapsedChild1, styles.rectangleViewPosition]}
      />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart1.png")}
      />
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <View style={[styles.vuesaxlineararrowLeftParent, styles.iconPosition]}>
        <Image
          style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
        <Text style={[styles.back, styles.backClr]}>Back</Text>
      </View>
      <Image
        style={[styles.mealCollapsedChild2, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/frame-351.png")}
      />
      <Pressable style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.vuesaxboldbagHappyParent, styles.parentFlexBox]}>
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.backTypo]}>Add to Bag</Text>
        </View>
        <Text style={styles.text}>$6.69</Text>
      </Pressable>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition]}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.statusIcons, styles.parentFlexBox]}>
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
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealPosition: {
    height: 56,
    backgroundColor: Color.light80,
    left: 0,
    right: 0,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.systemGreen100,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    right: 61,
    textAlign: "right",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  backClr: {
    color: Color.dark100,
    textAlign: "left",
  },
  drinksTypo: {
    color: Color.black,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: 21,
    position: "absolute",
  },
  vuesaxlinearaddPosition: {
    padding: Padding.p_11xs,
    backgroundColor: Color.silver,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    right: 21,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 36,
    height: 36,
  },
  iconPosition: {
    top: 45,
    position: "absolute",
  },
  frameParentPosition: {
    borderRadius: Border.br_lg,
    bottom: 30,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  backTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  basePosition: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  mealCollapsedChild: {
    top: 450,
  },
  mealCollapsedItem: {
    top: 511,
  },
  required: {
    top: 470,
    textAlign: "right",
  },
  required1: {
    top: 531,
    textAlign: "right",
  },
  mealCollapsedInner: {
    top: 572,
  },
  westernBbqCheeseburger: {
    top: 316,
    fontSize: FontSize.size_17xl,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    color: Color.dark100,
    left: 21,
    position: "absolute",
  },
  frameView: {
    top: 406,
    alignItems: "center",
    left: 21,
    position: "absolute",
  },
  sideItem: {
    top: 466,
  },
  drinks: {
    top: 527,
  },
  editCheeseburger: {
    top: 588,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearadd: {
    top: 463,
  },
  vuesaxlinearadd1: {
    top: 524,
  },
  vuesaxlinearadd2: {
    top: 586,
  },
  frameIcon: {
    top: 112,
    left: 22,
    width: 438,
    height: 198,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.gray_300,
    height: 112,
    bottom: 0,
  },
  mealCollapsedChild1: {
    backgroundColor: Color.gray_400,
    height: 93,
    top: 0,
  },
  cartIcon: {
    height: 36,
    top: 45,
    position: "absolute",
    right: 21,
    width: 36,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 78,
    height: 36,
    top: 45,
    position: "absolute",
  },
  vuesaxlineararrowLeftIcon: {
    height: 36,
  },
  back: {
    fontSize: FontSize.paragraphMedium_size,
    marginLeft: 1,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.dark100,
    lineHeight: 16,
  },
  vuesaxlineararrowLeftParent: {
    width: 69,
    justifyContent: "flex-end",
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    left: 21,
  },
  mealCollapsedChild2: {
    width: 62,
    height: 62,
    left: 21,
  },
  vuesaxboldbagHappyIcon: {
    width: 21,
    height: 21,
  },
  addToBag: {
    fontSize: FontSize.size_lg,
    color: Color.light100,
    marginLeft: 7,
    lineHeight: 18,
    textAlign: "left",
    flex: 1,
  },
  vuesaxboldbagHappyParent: {
    width: 158,
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.blue100,
    width: 56,
    marginLeft: 10,
    lineHeight: 18,
    textAlign: "right",
  },
  frameParent: {
    left: 101,
    backgroundColor: Color.dark100,
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    left: 21,
    position: "absolute",
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
    height: 34,
    bottom: 0,
  },
  mealCollapsed: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default MealCollapsed;
