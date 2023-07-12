import * as React from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SearchViaHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchViaHome}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <TextInput
        style={styles.searchViaHomeChild}
        placeholder="Search"
        placeholderTextColor="#002b5b"
      />
      <Pressable
        style={styles.cart}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cart2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vuesaxlinearlocationParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("EditAddressPage")}
      >
        <Image
          style={styles.vuesaxlinearlocationIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearlocation.png")}
        />
        <Text style={[styles.rdno2begumpet, styles.searchTypo]}>
          Rd.no 2,Begumpet
        </Text>
      </Pressable>
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <Text style={[styles.recentlySearched, styles.filtersTypo]}>
        Recently Searched
      </Text>
      <Pressable style={styles.clearAllWrapper}>
        <Text style={styles.clearAll}>CLEAR ALL</Text>
      </Pressable>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame20.png")}
          />
          <View style={styles.frameContainer}>
            <View style={styles.bbqChickenBurgerWrapper}>
              <Text
                style={[styles.bbqChickenBurger, styles.searchTypo]}
              >{`BBQ Chicken Burger `}</Text>
            </View>
            <View style={styles.logoParent}>
              <ImageBackground
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../assets/logo2.png")}
              />
              <Text style={[styles.kfc, styles.kfcTypo]}>KFC</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame20.png")}
          />
          <View style={styles.frameContainer}>
            <View style={styles.bbqChickenBurgerWrapper}>
              <Text
                style={[styles.bbqChickenBurger, styles.searchTypo]}
              >{`BBQ Chicken Burger `}</Text>
            </View>
            <View style={styles.logoParent}>
              <ImageBackground
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../assets/logo2.png")}
              />
              <Text style={[styles.kfc, styles.kfcTypo]}>KFC</Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={[styles.frameParent3, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <ImageBackground
            style={styles.logoIcon2Layout}
            resizeMode="cover"
            source={require("../assets/rectangle1156.png")}
          />
          <View style={styles.kfcParent}>
            <Text style={[styles.bbqChickenBurger, styles.searchTypo]}>
              KFC
            </Text>
            <View style={styles.bramleaRoadBramptonOnWrapper}>
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                10565 Bramlea Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon2, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={[styles.frameParent4, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <ImageBackground
            style={styles.logoIcon2Layout}
            resizeMode="cover"
            source={require("../assets/rectangle1156.png")}
          />
          <View style={styles.kfcParent}>
            <Text style={[styles.bbqChickenBurger, styles.searchTypo]}>
              KFC
            </Text>
            <View style={styles.bramleaRoadBramptonOnWrapper}>
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                10565 Bramlea Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon2, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={[styles.frameParent5, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <Image
            style={styles.logoIcon2Layout}
            contentFit="cover"
            source={require("../assets/logo3.png")}
          />
          <View style={styles.kfcParent}>
            <Text style={[styles.bbqChickenBurger, styles.searchTypo]}>
              McDonald’s
            </Text>
            <View style={styles.bramleaRoadBramptonOnWrapper}>
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon2, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={styles.frameParent6}>
        <View style={styles.frameGroup}>
          <Image
            style={styles.logoIcon2Layout}
            contentFit="cover"
            source={require("../assets/logo3.png")}
          />
          <View style={styles.kfcParent}>
            <Text style={[styles.bbqChickenBurger, styles.searchTypo]}>
              McDonald’s
            </Text>
            <View style={styles.bramleaRoadBramptonOnWrapper}>
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[styles.vuesaxlineararrowRightIcon2, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={[styles.vuesaxlinearsetting3Parent, styles.parentFlexBox]}>
        <Image
          style={[styles.vuesaxlinearsetting3Icon, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearsetting3.png")}
        />
        <Text style={[styles.filters, styles.filtersTypo]}>Filters</Text>
      </View>
      <View style={styles.menuBar}>
        <Image
          style={[styles.menuBarChild, styles.childIconLayout]}
          contentFit="cover"
          source={require("../assets/frame-104.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Image
          style={[styles.vuesaxbolddiscoverIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxbolddiscover.png")}
        />
        <View style={styles.favorites}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.favorites1, styles.homeTypo]}>Favorites</Text>
        </View>
        <Image
          style={styles.menuBarItem}
          contentFit="cover"
          source={require("../assets/ellipse-768.png")}
        />
        <View style={[styles.orders, styles.ordersPosition]}>
          <Image
            style={[styles.vuesaxlinearsetting3Icon, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlinearreceipt1.png")}
          />
          <Text style={[styles.favorites1, styles.homeTypo]}>Orders</Text>
        </View>
        <View style={[styles.profile, styles.ordersPosition]}>
          <Image
            style={[styles.profileChild, styles.childIconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-11562.png")}
          />
          <Text style={[styles.favorites1, styles.homeTypo]}>Profile</Text>
        </View>
        <View style={styles.discover}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={[styles.discover1, styles.homeTypo]}>Discover</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  searchTypo: {
    textAlign: "left",
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeRegular,
  },
  filtersTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.darkslateblue_100,
  },
  frameParentPosition: {
    left: 25,
    right: 14,
    position: "absolute",
  },
  kfcTypo: {
    color: Color.darkslategray_100,
    lineHeight: 19,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  childIconLayout: {
    width: 24,
    height: 24,
  },
  homeTypo: {
    textAlign: "center",
    color: Color.gray_100,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    lineHeight: 23,
  },
  ordersPosition: {
    height: 52,
    top: 28,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  vectorIcon: {
    top: 74,
    left: 49,
    height: 19,
    width: 27,
    position: "absolute",
  },
  searchViaHomeChild: {
    top: 186,
    width: 350,
    height: 60,
    paddingHorizontal: 23,
    paddingVertical: 19,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.antiquewhite_100,
    borderRadius: Border.br_mini,
    left: 46,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cart: {
    left: "87.44%",
    top: "8.01%",
    right: "6.52%",
    bottom: "89.01%",
    width: "6.04%",
    height: "2.99%",
    position: "absolute",
  },
  vuesaxlinearlocationIcon: {
    width: 19,
    height: 19,
  },
  rdno2begumpet: {
    marginLeft: 4,
    lineHeight: 23,
    color: Color.darkslateblue_100,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  vuesaxlinearlocationParent: {
    top: 61,
    left: 133,
    backgroundColor: Color.antiquewhite_100,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xs,
  },
  search: {
    top: 124,
    left: 41,
    fontSize: FontSize.size_17xl,
    letterSpacing: -1.8,
    lineHeight: 42,
    position: "absolute",
  },
  recentlySearched: {
    top: 266,
    left: 50,
    fontSize: FontSize.size_2xl,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontWeight: "500",
    position: "absolute",
  },
  clearAll: {
    letterSpacing: 0.2,
    lineHeight: 16,
    color: Color.darkorange,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  clearAllWrapper: {
    top: 254,
    left: 300,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  frameIcon: {
    width: 106,
    height: 49,
    overflow: "hidden",
  },
  bbqChickenBurger: {
    alignSelf: "stretch",
    lineHeight: 23,
    color: Color.darkslateblue_100,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  bbqChickenBurgerWrapper: {
    alignSelf: "stretch",
  },
  logoIcon: {
    paddingHorizontal: 6,
    paddingVertical: 7,
    borderRadius: Border.br_31xl,
  },
  kfc: {
    marginLeft: 5,
  },
  logoParent: {
    marginTop: 3,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginLeft: 9,
    alignSelf: "stretch",
    flex: 1,
  },
  vuesaxlineararrowRightIcon: {
    height: 24,
    marginLeft: 9,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_lg,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    height: 1,
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameParent: {
    top: 310,
  },
  frameView: {
    top: 547,
  },
  logoIcon2Layout: {
    height: 36,
    width: 36,
    borderRadius: Border.br_31xl,
  },
  bramleaRoadBrampton: {
    flex: 1,
  },
  bramleaRoadBramptonOnWrapper: {
    marginTop: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  kfcParent: {
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlineararrowRightIcon2: {
    marginLeft: 10,
    height: 24,
  },
  frameParent3: {
    top: 393,
  },
  frameParent4: {
    top: 707,
  },
  frameParent5: {
    top: 470,
  },
  frameParent6: {
    top: 630,
    right: 17,
    left: 22,
    position: "absolute",
  },
  vuesaxlinearsetting3Icon: {
    height: 24,
  },
  filters: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    marginLeft: 6,
  },
  vuesaxlinearsetting3Parent: {
    top: 122,
    left: 293,
    backgroundColor: "rgba(252, 226, 207, 0.4)",
  },
  menuBarChild: {
    top: 22,
    left: 37,
    height: 24,
    position: "absolute",
  },
  home: {
    top: 46,
    left: 32,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemibold,
    position: "absolute",
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
  vectorIcon1: {
    height: 24,
    width: 27,
  },
  favorites1: {
    marginTop: 4,
    fontFamily: FontFamily.manropeRegular,
    color: Color.gray_100,
  },
  favorites: {
    top: 30,
    left: 100,
    width: 50,
    height: 49,
    alignItems: "center",
    position: "absolute",
  },
  menuBarItem: {
    top: 67,
    width: 5,
    height: 5,
    left: 46,
    position: "absolute",
  },
  orders: {
    left: 271,
    width: 37,
  },
  profileChild: {
    height: 24,
    borderRadius: Border.br_31xl,
  },
  profile: {
    left: 343,
    width: 36,
    height: 52,
    top: 28,
  },
  vectorIcon2: {
    width: 20,
    height: 20,
  },
  discover1: {
    marginTop: 7,
    fontFamily: FontFamily.manropeRegular,
    color: Color.gray_100,
  },
  discover: {
    top: 31,
    left: 186,
    width: 47,
    height: 48,
    alignItems: "center",
    position: "absolute",
  },
  menuBar: {
    top: 741,
    left: 11,
    backgroundColor: Color.darkslateblue_100,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 400,
    height: 100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  searchViaHome: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    height: 865,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SearchViaHome;
