import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const RestaurantMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.restaurantMenu}>
      <Text style={styles.mcdonalds}>McDonald’s</Text>
      <Text
        style={[styles.bramleaSandalwood, styles.bramleaSandalwoodTypo]}
      >{`Bramlea & Sandalwood`}</Text>
      <Image
        style={styles.vuesaxlinearlocationIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlinearlocation2.png")}
      />
      <Image
        style={[styles.logoIcon, styles.logoIconLayout]}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={[styles.classicCheeseBurger, styles.bramleaSandalwoodTypo]}
            >
              Classic Cheese Burger (400 Cals)
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View style={[styles.frameContainer, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={[styles.classicCheeseBurger, styles.bramleaSandalwoodTypo]}
            >
              Simply Cheese with Sesame Seed buns
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$4.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$3.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon2, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={[styles.classicCheeseBurger, styles.bramleaSandalwoodTypo]}
            >{`Veggie & Bacon Hot Sauce Sandwich `}</Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$6.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$5.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <Pressable
        style={[styles.framePressable, styles.frameParentPosition]}
        onPress={() => navigation.navigate("MealCollapsed")}
      >
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon3, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={[styles.classicCheeseBurger, styles.bramleaSandalwoodTypo]}
            >
              Western BBQ Cheeseburger
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <View style={[styles.frameParent4, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon4, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame4.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={[styles.classicCheeseBurger, styles.bramleaSandalwoodTypo]}
            >
              Bacon and Veggies Salad
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View
        style={[styles.restaurantMenuChild, styles.lunchDinnerParentLayout]}
      />
      <View
        style={[styles.lunchDinnerParent, styles.lunchDinnerParentPosition]}
      >
        <Text style={styles.lunchDinner} />
        <Text style={styles.lunchDinner} />
        <Text style={styles.lunchDinner} />
        <View style={styles.rectangleView} />
      </View>
      <Image
        style={[styles.restaurantMenuItem, styles.logoIconLayout]}
        contentFit="cover"
        source={require("../assets/frame-35.png")}
      />
      <ScrollView
        style={styles.frameScrollview}
        horizontal={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.todaysDealsWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.todaysDeals, styles.backTypo]}>
            Today’s Deals
          </Text>
        </View>
        <View style={[styles.burgerMealsWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>
            Burger Meals
          </Text>
        </View>
        <View style={[styles.chickenFishWrapper, styles.wrapperSpaceBlock]}>
          <Text
            style={[styles.burgerMeals, styles.backTypo]}
          >{`Chicken & Fish`}</Text>
        </View>
        <View style={[styles.sidesWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>Sides</Text>
        </View>
        <View style={[styles.beveragesWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>Beverages</Text>
        </View>
      </ScrollView>
      <View
        style={[styles.restaurantMenuInner, styles.lunchDinnerParentPosition]}
      />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart1.png")}
      />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.restaurantMenuChild1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/frame-113.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.notchIconLayout]}
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
      <View style={[styles.homeIndicator, styles.basePosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bramleaSandalwoodTypo: {
    lineHeight: 23,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
  },
  logoIconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  frameParentPosition: {
    left: 0,
    right: 0,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  notchIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIconLayout: {
    width: 108,
    overflow: "hidden",
  },
  lunchDinnerParentLayout: {
    height: 59,
    top: 181,
  },
  lunchDinnerParentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
  },
  backTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "left",
  },
  wrapperSpaceBlock: {
    marginLeft: 8,
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.light80,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  mcdonalds: {
    top: 110,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1.2,
    lineHeight: 30,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
    left: 84,
    position: "absolute",
  },
  bramleaSandalwood: {
    top: 140,
    left: 101,
    letterSpacing: -0.1,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 23,
    position: "absolute",
  },
  vuesaxlinearlocationIcon: {
    top: 145,
    width: 13,
    height: 13,
    left: 84,
    position: "absolute",
  },
  logoIcon: {
    top: 112,
    left: 21,
  },
  frameIcon: {
    width: 98,
    height: 41,
    overflow: "hidden",
  },
  classicCheeseBurger: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    alignSelf: "stretch",
  },
  text: {
    textDecoration: "line-through",
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 18,
    fontSize: FontSize.size_base,
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.blue100,
    marginLeft: 9,
  },
  parent: {
    marginTop: 1,
    alignSelf: "stretch",
  },
  classicCheeseBurger400CalParent: {
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_lg,
    alignSelf: "stretch",
  },
  frameChild: {
    height: 1,
    alignSelf: "stretch",
    width: "100%",
  },
  frameParent: {
    top: 307,
    position: "absolute",
  },
  frameContainer: {
    top: 414,
    position: "absolute",
  },
  frameIcon2: {
    height: 37,
  },
  frameParent1: {
    top: 521,
    position: "absolute",
  },
  frameIcon3: {
    height: 40,
  },
  framePressable: {
    top: 628,
    position: "absolute",
  },
  frameIcon4: {
    height: 23,
  },
  frameParent4: {
    top: 735,
    position: "absolute",
  },
  restaurantMenuChild: {
    backgroundColor: Color.light80,
    position: "absolute",
    left: 0,
    right: 0,
  },
  lunchDinner: {
    display: "none",
  },
  rectangleView: {
    width: 126,
    display: "none",
  },
  lunchDinnerParent: {
    height: 59,
    top: 181,
  },
  restaurantMenuItem: {
    bottom: 775,
    left: 344,
    borderRadius: Border.br_81xl,
  },
  todaysDeals: {
    color: Color.light100,
    letterSpacing: -0.1,
  },
  todaysDealsWrapper: {
    backgroundColor: Color.dark90,
    zIndex: 0,
  },
  burgerMeals: {
    color: Color.dark801,
    letterSpacing: -0.1,
  },
  burgerMealsWrapper: {
    zIndex: 1,
  },
  chickenFishWrapper: {
    zIndex: 2,
  },
  sidesWrapper: {
    left: 476,
    zIndex: 3,
    top: 0,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  beveragesWrapper: {
    left: 372,
    zIndex: 4,
    top: 0,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  frameScrollview: {
    top: 258,
    left: 21,
    position: "absolute",
    width: "100%",
  },
  restaurantMenuInner: {
    backgroundColor: Color.gray_400,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 125,
  },
  back: {
    top: 56,
    left: 58,
    color: Color.dark100,
    position: "absolute",
  },
  restaurantMenuChild1: {
    right: 73,
  },
  notchIcon: {
    height: 30,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
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
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.black,
    top: 0,
    left: 0,
    right: 0,
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
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  restaurantMenu: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default RestaurantMenu;
