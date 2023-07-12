import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.menuBar, styles.menuBarLayout]}>
        <View style={styles.menuBarChild} />
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("SN$20:155$")}
        >
          <Image
            style={[styles.homeChild, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/frame-104.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </Pressable>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover1.png")}
        />
        <View style={[styles.favorites, styles.homePosition]}>
          <Text style={[styles.home1, styles.home1Typo]}>Favorites</Text>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
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
          style={[styles.vuesaxlinearreceiptIcon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearreceipt.png")}
        />
        <Text style={[styles.orders, styles.home1Typo]}>Orders</Text>
        <View style={styles.profile}>
          <Image
            style={[styles.profileChild, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-11561.png")}
          />
          <Text style={styles.profile1}>Profile</Text>
        </View>
        <Pressable
          style={styles.discover}
          onPress={() => navigation.navigate("DiscoverPage")}
        >
          <Text style={[styles.discover1, styles.home1Typo]}>Discover</Text>
          <Image
            style={styles.vectorIcon2}
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
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cart.png")}
        />
      </Pressable>
      <View style={styles.profileWrapper}>
        <Text style={styles.profile2}>Profile</Text>
      </View>
      <Text style={styles.editDetails}>Edit details</Text>
      <Text style={styles.personalDetails}>Personal details</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text style={styles.hemanthBhailikar}>Hemanth Bhailikar</Text>
        <Text style={[styles.promantra555gmailcom, styles.textTypo]}>
          promantra555@gmail.com
        </Text>
        <Text style={[styles.no15Uti, styles.textTypo]}>
          No 15 uti street off ovie palace road effurun delta state
        </Text>
        <Text style={[styles.text, styles.textTypo]}>+234 9011039271</Text>
        <ImageBackground
          style={[styles.groupItem, styles.menuBarLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle61.png")}
        />
        <View style={[styles.groupInner, styles.lineViewLayout]} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupViewLayout]}
        onPress={() => navigation.navigate("EditAddressPage")}
      >
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Text style={[styles.address, styles.addressTypo]}>Address</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupViewLayout]}
        onPress={() => navigation.navigate("PaymentMethodsPage")}
      >
        <View style={[styles.groupChild1, styles.groupViewLayout]} />
        <Text style={styles.addressTypo}>Payment Methods</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild2, styles.groupViewLayout]} />
        <Text style={[styles.address, styles.addressTypo]}>Reviews</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
        <View style={[styles.groupChild3, styles.groupViewLayout]} />
        <Text style={[styles.address, styles.addressTypo]}>Help</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBarLayout: {
    height: 100,
    position: "absolute",
  },
  homePosition: {
    height: 51,
    top: 28,
    position: "absolute",
  },
  childIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  home1Typo: {
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 197,
    width: 315,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  textTypo: {
    opacity: 0.5,
    left: 125,
    color: Color.gray_200,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 166,
    borderTopWidth: 0.5,
    borderColor: "#002b5b",
    borderStyle: "solid",
    opacity: 0.5,
    left: 125,
    position: "absolute",
  },
  groupViewLayout: {
    height: 60,
    width: 315,
    position: "absolute",
  },
  addressTypo: {
    left: 17,
    top: 20,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
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
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
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
    top: 28,
    left: 0,
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
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
  },
  profileChild: {
    left: 5,
    borderRadius: Border.br_31xl,
    top: 0,
    width: 24,
  },
  profile1: {
    top: 22,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.gray_100,
    lineHeight: 23,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
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
    left: 0,
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
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
    width: 400,
    height: 100,
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
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    textAlign: "left",
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
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
    color: Color.darkorange,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 126,
    textAlign: "left",
    position: "absolute",
  },
  personalDetails: {
    fontSize: FontSize.size_lg,
    left: 50,
    top: 126,
    textAlign: "left",
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    height: 197,
    width: 315,
    position: "absolute",
  },
  hemanthBhailikar: {
    top: 26,
    left: 126,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  promantra555gmailcom: {
    top: 53,
  },
  no15Uti: {
    top: 117,
    width: 182,
  },
  text: {
    top: 85,
    width: 132,
  },
  groupItem: {
    top: 18,
    left: 16,
    borderRadius: Border.br_3xs,
    width: 91,
  },
  groupInner: {
    top: 78,
  },
  lineView: {
    top: 110,
  },
  rectangleParent: {
    top: 167,
    left: 50,
  },
  rectangleView: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  address: {
    width: 151,
  },
  chevronLeftIcon: {
    top: 19,
    left: 275,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 391,
    left: 50,
  },
  groupChild1: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  rectangleContainer: {
    top: 478,
    left: 50,
  },
  groupChild2: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  groupView: {
    top: 565,
    left: 50,
  },
  groupChild3: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
  },
  rectangleParent1: {
    top: 652,
    left: 50,
  },
  profilePage: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default ProfilePage;
