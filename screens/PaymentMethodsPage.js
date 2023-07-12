import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const PaymentMethodsPage = () => {
  const [ellipseCheckboxchecked, setEllipseCheckboxchecked] = useState(true);
  const [ellipseCheckbox1checked, setEllipseCheckbox1checked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethodsPage}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.childShadowBox]} />
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("SN$20:155$")}
        >
          <Image
            style={[styles.homeChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/frame-104.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </Pressable>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover1.png")}
        />
        <View style={[styles.favorites, styles.homePosition]}>
          <Text style={[styles.home1, styles.home1Typo]}>Favorites</Text>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Image
          style={styles.menuBarItem}
          contentFit="cover"
          source={require("../assets/ellipse-7681.png")}
        />
        <Image
          style={[styles.vuesaxlinearreceiptIcon, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearreceipt.png")}
        />
        <Text style={[styles.orders, styles.home1Typo]}>Orders</Text>
        <View style={styles.profile}>
          <Image
            style={[styles.profileChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-11561.png")}
          />
          <Text style={[styles.profile1, styles.profile1Typo]}>Profile</Text>
        </View>
        <Pressable
          style={styles.discover}
          onPress={() => navigation.navigate("DiscoverPage")}
        >
          <Text style={[styles.discover1, styles.home1Typo]}>Discover</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIcon2Layout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
      </View>
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
      <View style={styles.profileWrapper}>
        <Text style={[styles.profile2, styles.cardTypo]}>Profile</Text>
      </View>
      <Text style={[styles.editDetails, styles.editDetailsPosition]}>
        Edit details
      </Text>
      <Text style={[styles.paymentMethods, styles.editDetailsPosition]}>
        Payment Methods
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={[styles.cardParent, styles.parentLayout]}
          onPress={() => navigation.navigate("EditCardDetailsPage")}
        >
          <Text style={[styles.card, styles.cardTypo]}>Card</Text>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <View style={styles.groupInner} />
          <CheckBox
            style={styles.ellipseCheckbox}
            checked={ellipseCheckboxchecked}
            onPress={() => setEllipseCheckboxchecked(!ellipseCheckboxchecked)}
            checkedColor="#f86f03"
            containerStyle={styles.ellipseCheckboxLayout}
          />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-8.png")}
          />
        </Pressable>
        <View style={[styles.bankAccountParent, styles.parentLayout]}>
          <Text style={[styles.card, styles.cardTypo]}>Bank account</Text>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-121.png")}
          />
          <View style={styles.groupInner} />
          <CheckBox
            style={styles.groupChild1Border}
            checked={ellipseCheckbox1checked}
            onPress={() => setEllipseCheckbox1checked(!ellipseCheckbox1checked)}
            checkedColor="#9f9f9f"
            containerStyle={styles.ellipseCheckbox1Layout}
          />
        </View>
      </View>
      <View style={[styles.paypalParent, styles.groupItemLayout]}>
        <Text style={[styles.card, styles.cardTypo]}>Paypal</Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-122.png")}
        />
        <View style={[styles.ellipseView, styles.groupChild1Border]} />
      </View>
      <Image
        style={[styles.bicreditCard2FrontFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bicreditcard2frontfill.png")}
      />
      <Image
        style={[styles.dashiconsbank, styles.vectorIcon2Layout]}
        contentFit="cover"
        source={require("../assets/dashiconsbank.png")}
      />
      <Image
        style={[styles.cibpaypalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cibpaypal.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 0,
    top: 11,
    position: "absolute",
  },
  ellipseCheckbox1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 0,
    top: 11,
    position: "absolute",
  },
  menuLayout: {
    height: 100,
    width: 400,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
  },
  homePosition: {
    height: 51,
    top: 28,
    position: "absolute",
  },
  childLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  home1Typo: {
    textAlign: "center",
    color: Color.gray_100,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    lineHeight: 23,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profile1Typo: {
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
  },
  vectorIcon2Layout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  cardTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mid,
  },
  editDetailsPosition: {
    top: 126,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 231,
    width: 315,
    position: "absolute",
  },
  parentLayout: {
    height: 55,
    width: 262,
    left: 21,
    position: "absolute",
  },
  groupItemLayout: {
    height: 40,
    position: "absolute",
  },
  groupChild1Border: {
    borderColor: "#9f9f9f",
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    top: 74,
    left: 49,
    width: 27,
    height: 19,
    position: "absolute",
  },
  menuBarChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.darkslateblue_100,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    height: 100,
    width: 400,
    position: "absolute",
  },
  homeChild: {
    left: 4,
    top: 0,
    width: 24,
  },
  home1: {
    fontFamily: FontFamily.manropeRegular,
    top: 28,
    left: 0,
  },
  home: {
    left: 32,
    width: 33,
  },
  vuesaxbolddiscoverIcon: {
    height: "24.8%",
    width: "6.2%",
    top: "53.68%",
    right: "65.57%",
    bottom: "21.52%",
    left: "28.23%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "46.34%",
    width: "53.62%",
    top: "-1.96%",
    right: "22.38%",
    bottom: "55.62%",
    left: "24%",
    position: "absolute",
  },
  favorites: {
    left: 100,
    width: 50,
  },
  menuBarItem: {
    top: 66,
    left: 361,
    width: 5,
    height: 5,
    position: "absolute",
  },
  vuesaxlinearreceiptIcon: {
    left: 278,
    top: 28,
  },
  orders: {
    top: 56,
    left: 271,
    fontFamily: FontFamily.manropeRegular,
  },
  profileChild: {
    left: 5,
    borderRadius: Border.br_31xl,
    top: 0,
    width: 24,
  },
  profile1: {
    top: 22,
    textAlign: "center",
    color: Color.gray_100,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    lineHeight: 23,
    position: "absolute",
    left: 0,
  },
  profile: {
    top: 24,
    left: 344,
    width: 37,
    height: 45,
    position: "absolute",
  },
  discover1: {
    top: 25,
    fontFamily: FontFamily.manropeRegular,
    left: 0,
  },
  vectorIcon2: {
    top: -1,
    left: 9,
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
  profile2: {
    letterSpacing: -0.2,
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    fontSize: FontSize.size_mid,
  },
  profileWrapper: {
    top: 61,
    left: 133,
    borderRadius: Border.br_xs,
    backgroundColor: Color.antiquewhite_100,
    width: 190,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  editDetails: {
    left: 300,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.darkorange,
  },
  paymentMethods: {
    left: 50,
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
  },
  groupChild: {
    backgroundColor: Color.light100,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  card: {
    top: 10,
    left: 81,
    fontFamily: FontFamily.workSansRegular,
    color: Color.black,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    width: 40,
    left: 30,
    height: 40,
    top: 0,
  },
  groupInner: {
    top: 55,
    borderColor: "#000",
    borderTopWidth: 0.5,
    width: 233,
    height: 1,
    opacity: 0.3,
    borderStyle: "solid",
    left: 30,
    position: "absolute",
  },
  ellipseCheckbox: {
    borderColor: "#f86f03",
    borderWidth: 1,
    borderStyle: "solid",
  },
  ellipseIcon: {
    top: 15,
    width: 7,
    height: 7,
    left: 4,
    position: "absolute",
  },
  cardParent: {
    top: 20,
  },
  bankAccountParent: {
    top: 90,
  },
  rectangleParent: {
    top: 185,
    left: 53,
  },
  ellipseView: {
    top: 11,
    width: 15,
    height: 15,
    left: 0,
    position: "absolute",
  },
  paypalParent: {
    top: 345,
    left: 74,
    width: 135,
  },
  bicreditCard2FrontFillIcon: {
    top: 216,
    left: 117,
  },
  dashiconsbank: {
    top: 284,
    left: 114,
    overflow: "hidden",
  },
  cibpaypalIcon: {
    top: 357,
    left: 116,
  },
  paymentMethodsPage: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default PaymentMethodsPage;
