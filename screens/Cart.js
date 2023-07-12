import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
      <Pressable
        style={styles.shoppingBagParent}
        onPress={() => navigation.navigate("EditAddressPage")}
      >
        <Image
          style={styles.shoppingBagIcon}
          contentFit="cover"
          source={require("../assets/shoppingbag.png")}
        />
        <Text style={styles.yourCart}>Your Cart</Text>
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.cartChildShadowBox]} />
        <Image
          style={[styles.bicreditCard2FrontFillIcon, styles.bicreditIconLayout]}
          contentFit="cover"
          source={require("../assets/bicreditcard2frontfill.png")}
        />
        <Text style={[styles.veggieTomatoMix, styles.veggieTypo]}>
          Veggie tomato mix
        </Text>
        <Text style={[styles.text, styles.textTypo1]}>{` ₹500 `}</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </View>
      <View style={[styles.cartChild, styles.cartChildShadowBox]} />
      <Text style={[styles.veggieTomatoMix1, styles.ellipseIconPosition]}>
        Veggie tomato mix
      </Text>
      <View style={[styles.cartItem, styles.cartChildShadowBox]} />
      <Image
        style={[styles.bicreditCard2FrontFillIcon1, styles.bicreditIconLayout]}
        contentFit="cover"
        source={require("../assets/bicreditcard2frontfill.png")}
      />
      <Text style={styles.fishWithMix}>{`Fish with mix `}</Text>
      <Text style={[styles.text1, styles.textTypo1]}>{` ₹500 `}</Text>
      <View style={[styles.cartInner, styles.groupItemLayout]} />
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <Pressable style={styles.pressable} />
      <Pressable style={styles.pressable1} />
      <View style={[styles.rectangleView, styles.groupItemLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Pressable style={styles.pressable2} />
      <Pressable style={styles.pressable3} />
      <View style={[styles.rectangleGroup, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.text4, styles.textTypo]}>1</Text>
        <Pressable style={styles.pressable4} />
        <Pressable style={[styles.pressable5, styles.swipeOnAnPosition]} />
      </View>
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <View
        style={[styles.swipeOnAnItemToDeleteParent, styles.groupItemLayout]}
      >
        <Text style={[styles.swipeOnAn, styles.swipeOnAnPosition]}>
          swipe on an item to delete
        </Text>
        <Image
          style={[styles.iwwaswipeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iwwaswipe.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.menuLayout]} />
        <Pressable
          style={[styles.frameParent, styles.favoritesPosition]}
          onPress={() => navigation.navigate("SN$20:155$")}
        >
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/frame-104.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover.png")}
        />
        <View style={[styles.favorites, styles.favoritesPosition]}>
          <Text style={[styles.favorites1, styles.homeTypo]}>Favorites</Text>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={[styles.orders, styles.ordersPosition]}>
          <Image
            style={[styles.vuesaxlinearreceiptIcon, styles.groupInnerLayout]}
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
            style={[styles.profileChild, styles.groupInnerLayout]}
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
            style={[styles.vectorIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[
          styles.vuesaxlineararrowLeftParent,
          styles.vuesaxlineararrowLayout,
        ]}
        onPress={() => navigation.navigate("SN$20:155$")}
      >
        <Image
          style={[
            styles.vuesaxlineararrowLeftIcon,
            styles.vuesaxlineararrowLayout,
          ]}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
        <Text style={[styles.back, styles.homeTypo1]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cartChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  bicreditIconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  veggieTypo: {
    textAlign: "center",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    color: Color.darkslateblue_100,
    fontSize: FontSize.size_mid,
  },
  textTypo1: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.darkslateblue_100,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 149,
    width: 149,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 440,
    position: "absolute",
  },
  groupItemLayout: {
    height: 20,
    position: "absolute",
  },
  textTypo: {
    color: Color.light100,
    fontFamily: FontFamily.workSansSemibold,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  swipeOnAnPosition: {
    top: 4,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuLayout: {
    height: 100,
    width: 400,
    position: "absolute",
  },
  favoritesPosition: {
    height: 49,
    top: 28,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.gray_100,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    lineHeight: 23,
    position: "absolute",
  },
  ordersPosition: {
    height: 52,
    top: 28,
    position: "absolute",
  },
  vuesaxlineararrowLayout: {
    height: 36,
    position: "absolute",
  },
  homeTypo1: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  shoppingBagIcon: {
    width: 26,
    height: 26,
  },
  yourCart: {
    letterSpacing: -0.2,
    width: 143,
    marginLeft: 4,
    textAlign: "left",
    color: Color.darkslateblue_100,
    lineHeight: 23,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  shoppingBagParent: {
    top: 61,
    borderRadius: Border.br_xs,
    backgroundColor: Color.antiquewhite_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    left: 133,
    position: "absolute",
  },
  groupChild: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    height: 102,
    position: "absolute",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 315,
  },
  bicreditCard2FrontFillIcon: {
    top: 43,
    left: 64,
  },
  veggieTomatoMix: {
    top: 27,
    left: 96,
    position: "absolute",
  },
  text: {
    top: 59,
    left: 104,
  },
  maskGroupIcon: {
    top: -14,
    left: -23,
  },
  rectangleParent: {
    top: 178,
    height: 102,
    width: 315,
    left: 50,
    position: "absolute",
  },
  cartChild: {
    top: 413,
    left: -10,
    width: 244,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    height: 102,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  veggieTomatoMix1: {
    left: 15,
    textAlign: "center",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    color: Color.darkslateblue_100,
    fontSize: FontSize.size_mid,
  },
  cartItem: {
    top: 294,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.light100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    height: 102,
    position: "absolute",
    borderRadius: Border.br_xl,
    width: 315,
    left: 50,
  },
  bicreditCard2FrontFillIcon1: {
    top: 337,
    left: 114,
  },
  fishWithMix: {
    top: 321,
    left: 153,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.darkslateblue_100,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  text1: {
    top: 353,
    left: 154,
  },
  cartInner: {
    top: 359,
    width: 52,
    height: 20,
    backgroundColor: Color.darkorange,
    borderRadius: Border.br_11xl,
    left: 289,
  },
  text2: {
    top: 361,
    left: 315,
  },
  pressable: {
    top: 360,
    left: 299,
    position: "absolute",
  },
  pressable1: {
    top: 363,
    left: 330,
    position: "absolute",
  },
  rectangleView: {
    top: 242,
    width: 52,
    height: 20,
    backgroundColor: Color.darkorange,
    borderRadius: Border.br_11xl,
    left: 289,
  },
  text3: {
    top: 245,
    left: 313,
  },
  pressable2: {
    top: 244,
    left: 297,
    position: "absolute",
  },
  pressable3: {
    top: 247,
    left: 328,
    position: "absolute",
  },
  groupItem: {
    width: 52,
    height: 20,
    backgroundColor: Color.darkorange,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  text4: {
    top: 2,
    left: 24,
  },
  pressable4: {
    top: 1,
    left: 8,
    position: "absolute",
  },
  pressable5: {
    left: 39,
  },
  rectangleGroup: {
    top: 475,
    width: 52,
    height: 20,
    left: 153,
  },
  maskGroupIcon1: {
    top: 280,
    left: 27,
  },
  ellipseIcon: {
    left: 258,
    width: 45,
    height: 45,
  },
  swipeOnAn: {
    left: 25,
    fontSize: 10,
    fontFamily: FontFamily.workSansRegular,
    color: Color.black,
    textAlign: "left",
  },
  iwwaswipeIcon: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  swipeOnAnItemToDeleteParent: {
    top: 139,
    width: 157,
    left: 133,
  },
  vectorIcon: {
    height: "1.73%",
    width: "4.21%",
    top: "49.14%",
    right: "32.48%",
    bottom: "49.14%",
    left: "63.32%",
  },
  menuBarChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.darkslateblue_100,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    height: 100,
    width: 400,
    left: 0,
    top: 0,
  },
  groupInner: {
    left: 4,
  },
  home: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    top: 26,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
  },
  frameParent: {
    left: 33,
    width: 33,
  },
  vuesaxbolddiscoverIcon: {
    height: "24.8%",
    width: "6.2%",
    top: "53.85%",
    right: "65.57%",
    bottom: "21.35%",
    left: "28.23%",
  },
  favorites1: {
    top: 26,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeRegular,
  },
  vectorIcon1: {
    height: "48.23%",
    width: "53.62%",
    top: "-2.04%",
    right: "22.38%",
    bottom: "53.81%",
    left: "24%",
  },
  favorites: {
    left: 100,
    width: 50,
  },
  vuesaxlinearreceiptIcon: {
    left: 7,
  },
  orders1: {
    top: 29,
    fontFamily: FontFamily.manropeRegular,
  },
  orders: {
    left: 271,
    width: 37,
  },
  profileChild: {
    left: 6,
    borderRadius: Border.br_31xl,
  },
  profile: {
    left: 343,
    width: 36,
  },
  discover1: {
    top: 25,
    fontFamily: FontFamily.manropeRegular,
  },
  vectorIcon2: {
    top: -1,
    left: 9,
  },
  discover: {
    left: 187,
    width: 47,
    height: 48,
    top: 28,
    position: "absolute",
  },
  menuBar: {
    top: 750,
    left: 15,
  },
  vuesaxlineararrowLeftIcon: {
    width: 36,
    left: 0,
    top: 0,
  },
  back: {
    top: 11,
    left: 37,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 16,
    color: Color.dark100,
    textAlign: "left",
    position: "absolute",
  },
  vuesaxlineararrowLeftParent: {
    top: 65,
    left: 28,
    width: 69,
  },
  cart: {
    backgroundColor: Color.gray_100,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Cart;
