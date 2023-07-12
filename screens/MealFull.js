import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const MealFull = () => {
  const [ellipseCheckboxchecked, setEllipseCheckboxchecked] = useState(false);
  const [ellipseCheckbox1checked, setEllipseCheckbox1checked] = useState(false);
  const [groupCheckboxchecked, setGroupCheckboxchecked] = useState(false);
  const [groupCheckbox1checked, setGroupCheckbox1checked] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.mealFull}>
      <View style={[styles.mealFullChild, styles.mealPosition]} />
      <Pressable
        style={[styles.mealFullItem, styles.mealPosition]}
        onPress={() => navigation.navigate("EditAddOn")}
      />
      <Pressable
        style={[styles.vuesaxlinearminus, styles.vuesaxlinearminusPosition]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vuesaxlinearminus1, styles.vuesaxlinearminusPosition]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </Pressable>
      <View style={[styles.mealFullInner, styles.mealPosition]} />
      <Text style={styles.westernBbqCheeseburger}>
        Western BBQ Cheeseburger Meal
      </Text>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Text style={[styles.softDrinks, styles.friesTypo]}>Soft Drinks</Text>
        </View>
        <CheckBox
          style={styles.frameChild}
          checked={ellipseCheckboxchecked}
          onPress={() => setEllipseCheckboxchecked(!ellipseCheckboxchecked)}
          checkedColor="#d5dee7"
          containerStyle={styles.ellipseCheckboxLayout}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame10.png")}
          />
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Medium Fries
          </Text>
        </View>
        <CheckBox
          style={styles.frameChild}
          checked={ellipseCheckbox1checked}
          onPress={() => setEllipseCheckbox1checked(!ellipseCheckbox1checked)}
          checkedColor="#d5dee7"
          containerStyle={styles.ellipseCheckbox1Layout}
        />
      </View>
      <View style={[styles.frameView, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frameLayout}>
            <ImageBackground
              style={[styles.rectangleIcon, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Sesame Seed Bun
          </Text>
        </View>
        <View style={[styles.editParent, styles.parentFlexBox]}>
          <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
          <Image
            style={styles.vuesaxlinearminusIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
      </View>
      <View style={[styles.mealFullInner1, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame11.png")}
          />
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Sesame Seed Bun
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon2, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame12.png")}
          />
          <View style={styles.beefPattyParent}>
            <Text style={[styles.beefPatty, styles.eaFlexBox]}>Beef Patty</Text>
            <Text style={[styles.ea, styles.eaTypo]}>$1.59 ea</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <Pressable style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon3, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame13.png")}
          />
          <View style={styles.beefPattyParent}>
            <Text style={[styles.beefPatty, styles.eaFlexBox]}>Cheese</Text>
            <Text style={[styles.ea, styles.eaTypo]}>$0.59 ea</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <Pressable style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame14.png")}
          />
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Banana Peppers
          </Text>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <Pressable style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon5, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame15.png")}
          />
          <Text style={[styles.mediumFries, styles.friesTypo]}>Lettuce</Text>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <Pressable style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent11, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame10.png")}
          />
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Chipotle Sauce
          </Text>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <Pressable style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameParent13, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame10.png")}
          />
          <Text style={[styles.mediumFries, styles.friesTypo]}>BBQ Sauce</Text>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <Pressable style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.mealFullInner2, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Text style={[styles.softDrinks, styles.friesTypo]}>Juices</Text>
          <CheckBox
            style={styles.frameInner}
            checked={groupCheckboxchecked}
            onPress={() => setGroupCheckboxchecked(!groupCheckboxchecked)}
            checkedColor="#f4739e"
            containerStyle={styles.groupCheckboxLayout}
          />
        </View>
      </View>
      <View style={[styles.mealFullInner3, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
            <Image
              style={[styles.frameIcon8, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/frame16.png")}
            />
            <Text style={[styles.largeFries, styles.friesTypo]}>
              Large Fries
            </Text>
          </View>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text6, styles.eaTypo]}>+$2.99</Text>
            <CheckBox
              style={styles.groupCheckbox}
              checked={groupCheckbox1checked}
              onPress={() => setGroupCheckbox1checked(!groupCheckbox1checked)}
              checkedColor="#f4739e"
              containerStyle={styles.groupCheckbox1Layout}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.sideItem, styles.drinksTypo]}>Side Item</Text>
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.required1, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editCheeseburger, styles.drinksTypo]}>
        Edit Cheeseburger
      </Text>
      <View style={[styles.mealFullInner4, styles.mealFullInner4FlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.frameIcon9}
              contentFit="cover"
              source={require("../assets/frame17.png")}
            />
            <Text style={[styles.mediumFries, styles.friesTypo]}>
              Fruit Punch Juice
            </Text>
          </View>
          <View style={[styles.editGroup, styles.parentFlexBox]}>
            <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
            <Image
              style={styles.vuesaxlinearminusIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowright.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameParent19}>
        <View style={styles.frame1}>
          <Image
            style={[styles.rectangleIcon1, styles.rectangleIcon1Layout]}
            contentFit="cover"
            source={require("../assets/rectangle1.png")}
          />
        </View>
        <Image
          style={styles.rectangleIcon2}
          contentFit="cover"
          source={require("../assets/rectangle2.png")}
        />
        <View style={styles.frame2}>
          <Image
            style={[styles.rectangleIcon1, styles.rectangleIcon1Layout]}
            contentFit="cover"
            source={require("../assets/rectangle3.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.vuesaxlinearminus2, styles.vuesaxlinearminusPosition]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Image
        style={[styles.mealFullChild1, styles.mealFullChild1Position]}
        contentFit="cover"
        source={require("../assets/frame-352.png")}
      />
      <Pressable
        style={[styles.framePressable, styles.mealFullChild1Position]}
        onPress={() => navigation.navigate("Cart")}
      >
        <View
          style={[styles.vuesaxboldbagHappyParent, styles.frameParentFlexBox]}
        >
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.text7Layout]}>Add to Bag</Text>
        </View>
        <Text style={[styles.text7, styles.text7Layout]}>$8.69</Text>
      </Pressable>
      <View style={[styles.mealFullChild2, styles.rectangleViewPosition]} />
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
      <Pressable
        style={[styles.vuesaxlineararrowLeftParent, styles.iconLayout]}
        onPress={() => navigation.navigate("MealCollapsed")}
      >
        <Image
          style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
        <Text style={[styles.back, styles.editTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.statusIcons, styles.frameParentFlexBox]}>
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
          <View style={styles.base} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  groupCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  groupCheckbox1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  mealPosition: {
    height: 56,
    backgroundColor: Color.light80,
    left: 0,
    right: 0,
    position: "absolute",
  },
  vuesaxlinearminusPosition: {
    padding: Padding.p_11xs,
    flexDirection: "row",
    backgroundColor: Color.silver,
    borderRadius: Border.br_81xl,
    right: 21,
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  friesTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
  },
  frameIconLayout: {
    width: 92,
    overflow: "hidden",
  },
  rectangleIconPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  editTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  eaFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  eaTypo: {
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.manropeRegular,
  },
  editLayout: {
    lineHeight: 16,
    color: Color.dark100,
  },
  buttonFlexBox: {
    padding: Padding.p_7xs,
    width: 32,
    backgroundColor: Color.dark801,
    borderRadius: Border.br_161xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 30,
    width: 92,
  },
  drinksTypo: {
    color: Color.black,
    fontSize: FontSize.size_2xl,
    lineHeight: 23,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: 21,
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
  mealFullInner4FlexBox: {
    paddingTop: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleIcon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  mealFullChild1Position: {
    borderRadius: Border.br_lg,
    bottom: 30,
    position: "absolute",
  },
  text7Layout: {
    lineHeight: 18,
    flex: 1,
  },
  iconLayout: {
    height: 36,
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  mealFullChild: {
    top: 450,
  },
  mealFullItem: {
    top: 642,
  },
  vuesaxlinearminusIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearminus: {
    top: 655,
  },
  vuesaxlinearminus1: {
    top: 463,
  },
  mealFullInner: {
    top: 907,
  },
  westernBbqCheeseburger: {
    top: 316,
    fontSize: FontSize.size_17xl,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
    left: 21,
    position: "absolute",
  },
  softDrinks: {
    textAlign: "left",
    flex: 1,
  },
  softDrinksWrapper: {
    flex: 1,
  },
  frameChild: {
    borderColor: "#d5dee7",
    borderWidth: 1.5,
    marginLeft: 10,
    borderStyle: "solid",
  },
  frameParent: {
    top: 704,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
    height: 20,
  },
  mediumFries: {
    marginLeft: 2,
    textAlign: "left",
    flex: 1,
  },
  frameGroup: {
    top: 512,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon: {
    width: "118.6%",
    right: "-25.13%",
    left: "6.52%",
  },
  edit: {
    textAlign: "right",
    lineHeight: 16,
    color: Color.dark100,
    letterSpacing: -0.3,
    fontSize: FontSize.paragraphMedium_size,
    fontWeight: "500",
  },
  editParent: {
    marginLeft: 10,
  },
  frameView: {
    top: 969,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon1: {
    width: 123,
    height: 32,
  },
  mealFullInner1: {
    top: 1397,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon2: {
    height: 34,
    overflow: "hidden",
  },
  beefPatty: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
  },
  ea: {
    lineHeight: 19,
    color: Color.peach100,
    alignSelf: "stretch",
    textAlign: "left",
  },
  beefPattyParent: {
    marginLeft: 2,
    flex: 1,
  },
  vuesaxlinearminusIcon2: {
    width: 20,
    height: 20,
  },
  text: {
    textAlign: "center",
    letterSpacing: -0.3,
    lineHeight: 16,
    marginLeft: 10,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  button2: {
    marginLeft: 10,
  },
  button: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent3: {
    top: 1087,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon3: {
    height: 16,
    overflow: "hidden",
  },
  frameParent5: {
    top: 1147,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent7: {
    top: 1217,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon5: {
    height: 14,
    overflow: "hidden",
  },
  frameParent9: {
    top: 1277,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent11: {
    top: 1337,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent13: {
    top: 1027,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameInner: {
    marginLeft: 2,
  },
  mealFullInner2: {
    top: 760,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon8: {
    overflow: "hidden",
  },
  largeFries: {
    width: 224,
    marginLeft: 2,
    textAlign: "left",
  },
  text6: {
    lineHeight: 22,
    color: Color.darkslategray_100,
    textAlign: "right",
  },
  groupCheckbox: {
    marginLeft: 9,
  },
  parent: {
    width: 89,
    marginLeft: 2,
  },
  mealFullInner3: {
    top: 568,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  sideItem: {
    top: 466,
  },
  required: {
    top: 470,
  },
  required1: {
    top: 662,
  },
  drinks: {
    top: 658,
  },
  editCheeseburger: {
    top: 923,
  },
  frameIcon9: {
    width: 38,
    height: 33,
    overflow: "hidden",
  },
  editGroup: {
    marginLeft: 2,
  },
  mealFullInner4: {
    top: 814,
    right: 16,
    left: 16,
    borderRadius: Border.br_sm,
    borderColor: "#b3bfcb",
    borderWidth: 1,
    paddingLeft: Padding.p_2xl,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_xl,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.light100,
  },
  rectangleIcon1: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frame1: {
    left: 189,
    width: 249,
    height: 191,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleIcon2: {
    top: 53,
    width: 365,
    height: 134,
    left: 0,
    position: "absolute",
  },
  frame2: {
    top: 124,
    left: 115,
    width: 220,
    height: 74,
    overflow: "hidden",
    position: "absolute",
  },
  frameParent19: {
    top: 112,
    left: 22,
    width: 438,
    height: 198,
    position: "absolute",
  },
  vuesaxlinearminus2: {
    top: 921,
  },
  rectangleView: {
    backgroundColor: Color.gray_300,
    height: 112,
    bottom: 0,
  },
  mealFullChild1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  vuesaxboldbagHappyParent: {
    width: 158,
  },
  text7: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.blue100,
    textAlign: "right",
  },
  framePressable: {
    marginLeft: -94,
    left: "50%",
    backgroundColor: Color.dark100,
    width: 268,
    paddingHorizontal: Padding.p_3xl,
    paddingBottom: Padding.p_2xl,
    paddingTop: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  mealFullChild2: {
    backgroundColor: Color.gray_400,
    height: 93,
    top: 0,
  },
  cartIcon: {
    width: 36,
    height: 36,
    top: 45,
    right: 21,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 78,
    width: 36,
    height: 36,
    top: 45,
  },
  vuesaxlineararrowLeftIcon: {
    width: 36,
    height: 36,
    top: 0,
    left: 0,
  },
  back: {
    top: 11,
    left: 37,
    lineHeight: 16,
    color: Color.dark100,
    fontSize: FontSize.paragraphMedium_size,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  vuesaxlineararrowLeftParent: {
    width: 69,
    top: 45,
    left: 21,
  },
  notchIcon: {
    maxWidth: "100%",
    top: 0,
    height: 30,
    overflow: "hidden",
    left: 0,
    right: 0,
    position: "absolute",
  },
  networkSignalLight: {
    height: 14,
    width: 20,
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
    overflow: "hidden",
    left: 21,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.black,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
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
  mealFull: {
    borderRadius: Border.br_27xl,
    height: 1606,
    width: "100%",
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default MealFull;
