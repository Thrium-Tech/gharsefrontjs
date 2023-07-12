import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const LiveTracking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liveTracking}>
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
        style={styles.vuesaxlinearlocationParent}
        onPress={() => navigation.navigate("EditAddressPage")}
      >
        <Image
          style={styles.vuesaxlinearlocationIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearlocation.png")}
        />
        <Text style={styles.rdno2begumpet}>Rd.no 2,Begumpet</Text>
      </Pressable>
      <View style={[styles.content, styles.contentPosition]}>
        <View style={styles.navBar}>
          <Image
            style={[styles.chevronArrowLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronarrowleft.png")}
          />
          <Image
            style={[styles.chevronArrowLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/moreoverflowmenuvert.png")}
          />
        </View>
        <ImageBackground
          style={styles.contentIcon}
          resizeMode="cover"
          source={require("../assets/content.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.contentPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.iconChildPosition]} />
        <Image
          style={[styles.menuBarItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/frame-104.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover.png")}
        />
        <Pressable
          style={styles.favorites}
          onPress={() => navigation.navigate("Favourites")}
        >
          <Text style={[styles.favorites1, styles.homeTypo]}>Favorites</Text>
          <Image
            style={[styles.vectorIcon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Image
          style={styles.menuBarInner}
          contentFit="cover"
          source={require("../assets/ellipse-768.png")}
        />
        <View style={[styles.orders, styles.ordersPosition]}>
          <Image
            style={[styles.vuesaxlinearreceiptIcon, styles.iconChildPosition]}
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
            style={[styles.profileChild, styles.iconChildPosition]}
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
            style={[styles.vectorIcon3, styles.iconChildPosition]}
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
  contentPosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  menuLayout: {
    height: 100,
    width: 400,
  },
  iconChildPosition: {
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
    width: 27,
    height: 19,
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
  vuesaxlinearlocationIcon: {
    width: 19,
    height: 19,
  },
  rdno2begumpet: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    color: Color.darkslateblue_100,
    textAlign: "left",
    marginLeft: 4,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
  },
  vuesaxlinearlocationParent: {
    top: 61,
    left: 133,
    borderRadius: Border.br_xs,
    backgroundColor: Color.antiquewhite_100,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  chevronArrowLeftIcon: {
    overflow: "hidden",
  },
  navBar: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  contentIcon: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    paddingTop: 48,
    justifyContent: "flex-end",
    marginTop: 33,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  content: {
    top: 44,
    right: "0%",
    bottom: -1,
    paddingTop: Padding.p_base,
    width: "100%",
  },
  vectorIcon1: {
    height: "12.02%",
    width: "76.86%",
    top: "53.46%",
    right: "23.14%",
    bottom: "34.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: 22,
    left: 37,
    position: "absolute",
  },
  home: {
    top: 46,
    left: 32,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemibold,
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
    top: 26,
    left: 0,
    fontFamily: FontFamily.manropeRegular,
  },
  vectorIcon2: {
    height: "44.15%",
    width: "49.62%",
    top: "0%",
    right: "24.38%",
    bottom: "55.85%",
    left: "26%",
    position: "absolute",
  },
  favorites: {
    top: 30,
    left: 100,
    width: 50,
    height: 49,
    position: "absolute",
  },
  menuBarInner: {
    top: 67,
    left: 46,
    width: 5,
    height: 5,
    position: "absolute",
  },
  vuesaxlinearreceiptIcon: {
    left: 7,
    height: 24,
    width: 24,
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
    height: 24,
    width: 24,
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
    left: 10,
    width: 18,
    height: 18,
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
    display: "none",
    position: "absolute",
  },
  liveTracking: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default LiveTracking;
