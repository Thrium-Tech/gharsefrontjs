import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const DeliveredPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deliveredPage}>
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
          style={[styles.icon, styles.iconLayout]}
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
          source={require("../assets/vuesaxlinearlocation1.png")}
        />
        <Text style={styles.rdno2begumpet}>Rd.no 2,Begumpet</Text>
      </Pressable>
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.menuLayout]} />
        <Image
          style={[styles.menuBarItem, styles.menuBarItemLayout]}
          contentFit="cover"
          source={require("../assets/frame-104.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover.png")}
        />
        <Pressable
          style={styles.favorites}
          onPress={() => navigation.navigate("Favourites")}
        >
          <Text style={[styles.favorites1, styles.homeTypo]}>Favorites</Text>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
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
            style={[styles.vuesaxlinearreceiptIcon, styles.menuBarItemLayout]}
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
            style={[styles.profileChild, styles.menuBarItemLayout]}
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
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.text, styles.textFlexBox]}>
        Your Favorite Food, Delivered Fast
      </Text>
      <Text style={[styles.thankYouFor, styles.textFlexBox]}>
        Thank you for ordering with us.
      </Text>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuLayout: {
    height: 100,
    width: 400,
    position: "absolute",
  },
  menuBarItemLayout: {
    height: 24,
    width: 24,
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
  textFlexBox: {
    width: 295,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
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
    maxWidth: "100%",
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
    textAlign: "left",
    marginLeft: 4,
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
  },
  vuesaxlinearlocationParent: {
    top: 61,
    left: 133,
    borderRadius: Border.br_xs,
    backgroundColor: Color.antiquewhite_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
    top: 0,
  },
  menuBarItem: {
    top: 22,
    left: 37,
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
  vectorIcon1: {
    height: "48.23%",
    width: "53.62%",
    top: "-2.04%",
    right: "22.38%",
    bottom: "53.81%",
    left: "24%",
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
    top: 0,
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
    top: 0,
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
  vectorIcon2: {
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
  },
  text: {
    marginLeft: -140,
    top: 144,
    left: "50%",
    fontSize: 32,
    letterSpacing: -1,
    lineHeight: 41,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    alignItems: "flex-end",
    color: Color.darkslateblue_100,
  },
  thankYouFor: {
    top: 245,
    left: 74,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.dark100,
    alignItems: "center",
    width: 295,
    display: "flex",
  },
  illustrationIcon: {
    top: 316,
    left: 50,
    width: 343,
    height: 386,
    position: "absolute",
  },
  deliveredPage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default DeliveredPage;
