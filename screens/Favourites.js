import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Favourites = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.favourites}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={styles.cart}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/cart.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vectorParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("EditAddressPage")}
      >
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.yourFavorites, styles.yourFavoritesTypo]}>
          Your favorites
        </Text>
      </Pressable>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={[styles.classicCheeseBurger, styles.textClr]}>
              Classic Cheese Burger (400 Cals)
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameContainer, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Pressable style={styles.frameIcon}>
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconPosition]}
              contentFit="cover"
              source={require("../assets/rectangle4.png")}
            />
          </Pressable>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={[styles.classicCheeseBurger, styles.textClr]}>
              Simply Cheese with Sesame Seed buns
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$4.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$3.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame18.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={[styles.classicCheeseBurger, styles.textClr]}
            >{`Veggie & Bacon Hot Sauce Sandwich `}</Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$6.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$5.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent3, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon2, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame19.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={[styles.classicCheeseBurger, styles.textClr]}>
              Western BBQ Cheeseburger
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent5, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon3, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame4.png")}
          />
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={[styles.classicCheeseBurger, styles.textClr]}>
              Bacon and Veggies Salad
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent7, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <Pressable style={[styles.frameIcon2, styles.frameIconLayout]}>
            <ImageBackground
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle5.png")}
            />
          </Pressable>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={[styles.classicCheeseBurger, styles.textClr]}>
              Western BBQ Cheeseburger
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent9, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.frameIcon3, styles.frameIconLayout]}>
            <Image
              style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
              contentFit="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={[styles.classicCheeseBurger, styles.textClr]}>
              Bacon and Veggies Salad
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.childPosition]} />
        <Image
          style={styles.menuBarItem}
          contentFit="cover"
          source={require("../assets/frame-104.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover.png")}
        />
        <View style={styles.favorites}>
          <Text style={[styles.favorites1, styles.homeTypo]}>Favorites</Text>
          <Image
            style={[styles.vectorIcon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Image
          style={styles.menuBarInner}
          contentFit="cover"
          source={require("../assets/ellipse-7681.png")}
        />
        <View style={[styles.orders, styles.ordersPosition]}>
          <Image
            style={[styles.vuesaxlinearreceiptIcon, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/vuesaxlinearreceipt.png")}
          />
          <Text style={[styles.orders1, styles.homeTypo]}>Orders</Text>
        </View>
        <Pressable
          style={[styles.profile, styles.ordersPosition]}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <Image
            style={[styles.profileChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1156.png")}
          />
          <Text style={[styles.orders1, styles.homeTypo]}>Profile</Text>
        </Pressable>
        <Pressable
          style={styles.discover}
          onPress={() => navigation.navigate("DiscoverPage")}
        >
          <Text style={[styles.discover1, styles.homeTypo]}>Discover</Text>
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  yourFavoritesTypo: {
    textAlign: "left",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  frameParentPosition: {
    left: 19,
    right: 19,
    position: "absolute",
  },
  textClr: {
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  rectangleIconPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    width: 108,
    overflow: "hidden",
  },
  menuLayout: {
    height: 100,
    width: 400,
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.gray_100,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    lineHeight: 23,
    position: "absolute",
  },
  ordersPosition: {
    height: 52,
    top: 28,
    position: "absolute",
  },
  vectorIcon: {
    top: 74,
    left: 49,
    height: 19,
    width: 27,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cart: {
    left: "87.44%",
    top: "7.48%",
    right: "6.52%",
    bottom: "89.73%",
    width: "6.04%",
    height: "2.79%",
    position: "absolute",
  },
  vectorIcon1: {
    height: 24,
    width: 27,
  },
  yourFavorites: {
    color: Color.darkslateblue_100,
    width: 143,
    marginLeft: 4,
    fontFamily: FontFamily.manropeRegular,
  },
  vectorParent: {
    top: 61,
    left: 133,
    borderRadius: Border.br_xs,
    backgroundColor: Color.antiquewhite_100,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  frameIcon: {
    width: 98,
    height: 41,
    overflow: "hidden",
  },
  classicCheeseBurger: {
    alignSelf: "stretch",
    textAlign: "left",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  text: {
    textDecoration: "line-through",
    color: Color.dark100,
    fontFamily: FontFamily.manropeRegular,
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
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameParent: {
    top: 124,
  },
  rectangleIcon: {
    height: "97.56%",
    width: "139.8%",
    top: "1.22%",
    right: "-39.8%",
    bottom: "1.22%",
  },
  frameContainer: {
    top: 231,
  },
  frameIcon1: {
    height: 69,
  },
  frameParent1: {
    top: 338,
  },
  frameIcon2: {
    height: 40,
  },
  frameParent3: {
    top: 445,
  },
  frameIcon3: {
    height: 23,
  },
  frameParent5: {
    top: 552,
  },
  rectangleIcon1: {
    width: "100.93%",
    top: "-3.75%",
    right: "-11.11%",
    bottom: "3.75%",
    left: "10.19%",
    height: "100%",
    position: "absolute",
  },
  frameParent7: {
    top: 625,
  },
  rectangleIcon2: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  frameParent9: {
    top: 732,
  },
  menuBarChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.darkslateblue_100,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    height: 100,
    width: 400,
  },
  menuBarItem: {
    left: 37,
    top: 28,
    width: 24,
    height: 24,
    position: "absolute",
  },
  home: {
    top: 54,
    left: 33,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
  },
  vuesaxbolddiscoverIcon: {
    height: "24.8%",
    width: "6.2%",
    top: "53.85%",
    right: "65.57%",
    bottom: "21.35%",
    left: "28.23%",
    position: "absolute",
  },
  favorites1: {
    top: 24,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemibold,
    left: 0,
  },
  vectorIcon2: {
    height: "50.28%",
    width: "51.56%",
    top: "-2.13%",
    right: "21.52%",
    bottom: "51.84%",
    left: "26.92%",
    position: "absolute",
  },
  favorites: {
    top: 22,
    left: 98,
    width: 52,
    height: 47,
    position: "absolute",
  },
  menuBarInner: {
    top: 68,
    left: 123,
    width: 5,
    height: 5,
    position: "absolute",
  },
  vuesaxlinearreceiptIcon: {
    left: 7,
    width: 24,
    height: 24,
  },
  orders1: {
    top: 29,
    left: 0,
    fontFamily: FontFamily.manropeRegular,
  },
  orders: {
    left: 271,
    width: 37,
  },
  profileChild: {
    left: 6,
    borderRadius: Border.br_31xl,
    width: 24,
    height: 24,
  },
  profile: {
    left: 343,
    width: 36,
  },
  discover1: {
    top: 25,
    left: 0,
    fontFamily: FontFamily.manropeRegular,
  },
  vectorIcon3: {
    top: -1,
    left: 9,
    width: 20,
    height: 20,
    position: "absolute",
  },
  discover: {
    top: 31,
    left: 186,
    width: 47,
    height: 48,
    position: "absolute",
  },
  menuBar: {
    top: 750,
    left: 15,
    position: "absolute",
  },
  favourites: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Favourites;
