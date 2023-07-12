import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HamburgerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([undefined]);
  const [drawerItemsActive] = useState([undefined]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <View style={styles.hamburgerMenu}>
      <View style={styles.image10} />
      <Text style={[styles.profile, styles.ordersTypo]}>Profile</Text>
      <Text style={[styles.security, styles.ordersTypo]}>Security</Text>
      <Text style={[styles.orders, styles.ordersTypo]}>orders</Text>
      <Text style={[styles.privacyPolicy, styles.ordersTypo]}>
        Privacy policy
      </Text>
      <Text style={[styles.offerAndPromo, styles.ordersTypo]}>
        offer and promo
      </Text>
      <Text style={[styles.signOut, styles.ordersTypo]}>Sign-out</Text>
      <Image
        style={styles.hamburgerMenuChild}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <View style={[styles.hamburgerMenuItem, styles.hamburgerLayout]} />
      <View style={[styles.hamburgerMenuInner, styles.hamburgerLayout]} />
      <View style={[styles.lineView, styles.hamburgerLayout]} />
      <View style={[styles.hamburgerMenuChild1, styles.hamburgerLayout]} />
      <Image
        style={[styles.ggprofileIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ggprofile.png")}
      />
      <Image
        style={[styles.icons8buy, styles.icons8buyPosition]}
        contentFit="cover"
        source={require("../assets/icons8buy.png")}
      />
      <Image
        style={[styles.icoutlineLocalOfferIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icoutlinelocaloffer.png")}
      />
      <Image
        style={[styles.icoutlineStickyNote2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icoutlinestickynote2.png")}
      />
      <Image
        style={[styles.whhsecurityaltIcon, styles.icons8buyPosition]}
        contentFit="cover"
        source={require("../assets/whhsecurityalt.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ordersTypo: {
    textAlign: "center",
    color: Color.light100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  hamburgerLayout: {
    height: 0,
    width: 132,
    borderTopWidth: 0.3,
    borderColor: "#f4f4f8",
    borderStyle: "solid",
    left: 74,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 38,
    position: "absolute",
    overflow: "hidden",
  },
  icons8buyPosition: {
    left: 38,
    position: "absolute",
    overflow: "hidden",
  },
  image10: {
    top: 156,
    left: 254,
    borderRadius: Border.br_11xl,
    width: 261,
    height: 563,
    position: "absolute",
  },
  profile: {
    top: 161,
    left: 74,
    color: Color.light100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  security: {
    top: 473,
    left: 74,
    color: Color.light100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  orders: {
    top: 239,
    left: 74,
    color: Color.light100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  privacyPolicy: {
    top: 395,
    left: 74,
    color: Color.light100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  offerAndPromo: {
    top: 317,
    left: 74,
    color: Color.light100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  signOut: {
    top: 783,
    left: 41,
  },
  hamburgerMenuChild: {
    top: 790,
    left: 129,
    width: 23,
    height: 15,
    position: "absolute",
  },
  hamburgerMenuItem: {
    top: 213,
  },
  hamburgerMenuInner: {
    top: 291,
  },
  lineView: {
    top: 369,
  },
  hamburgerMenuChild1: {
    top: 447,
  },
  ggprofileIcon: {
    top: 162,
  },
  icons8buy: {
    width: 26,
    height: 26,
    top: 239,
  },
  icoutlineLocalOfferIcon: {
    top: 319,
  },
  icoutlineStickyNote2Icon: {
    top: 397,
  },
  whhsecurityaltIcon: {
    top: 476,
    width: 20,
    height: 19,
  },
  hamburgerMenu: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkslateblue_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default HamburgerMenu;
