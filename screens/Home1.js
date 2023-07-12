import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home1}>
      <Text style={styles.goodAfternoonHemant}>{`Good afternoon,
Hemant`}</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <TextInput
        style={styles.search}
        placeholder="Search"
        placeholderTextColor="#002b5b"
      />
      <View style={styles.mealsParent}>
        <Text style={styles.meals} />
        <Text style={styles.meals} />
        <Text style={styles.meals} />
        <Text style={styles.meals} />
        <View style={styles.groupChild} />
      </View>
      <Pressable
        style={styles.cart}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/cart2.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.vuesaxlinearlocationParent,
          styles.restaurantParentFlexBox,
        ]}
        onPress={() => navigation.navigate("EditAddressPage")}
      >
        <Image
          style={styles.vuesaxlinearlocationIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearlocation.png")}
        />
        <Text style={[styles.rdno2begumpet, styles.mSpaceBlock]}>
          Rd.no 2,Begumpet
        </Text>
      </Pressable>
      <View
        style={[styles.vuesaxlinearclockParent, styles.restaurantParentFlexBox]}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vuesaxlinearclock.png")}
        />
        <Text style={[styles.rdno2begumpet, styles.mSpaceBlock]}>Now</Text>
      </View>
      <Pressable
        style={[styles.restaurantCard, styles.restaurantCardSpaceBlock]}
        onPress={() => navigation.navigate("RestaurantMenu")}
      >
        <View style={[styles.restaurantParent, styles.restaurantParentFlexBox]}>
          <View style={[styles.restaurant, styles.restaurantParentFlexBox]}>
            <View style={[styles.nameLogo, styles.ratingsFlexBox]}>
              <Image
                style={styles.logoLayout}
                contentFit="cover"
                source={require("../assets/logo1.png")}
              />
              <View style={styles.name}>
                <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                  McDonald’s
                </Text>
                <View style={styles.location}>
                  <Image
                    style={styles.vuesaxboldlocationIcon}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldlocation.png")}
                  />
                  <Text
                    style={[styles.bramleaSandalwood, styles.textClr]}
                  >{`Bramlea & Sandalwood`}</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.favouriteIcon, styles.favouriteLayout]}
              contentFit="cover"
              source={require("../assets/favourite.png")}
            />
          </View>
          <Image
            style={[styles.frameChild, styles.item1ParentSpaceBlock]}
            contentFit="cover"
            source={require("../assets/vector-41.png")}
          />
          <View
            style={[styles.locationRatingsParent, styles.item1ParentSpaceBlock]}
          >
            <View style={styles.ratingsFlexBox}>
              <View style={[styles.distance, styles.ratingsFlexBox]}>
                <Image
                  style={styles.vuesaxboldrouteSquareIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxboldroutesquare.png")}
                />
                <Text style={[styles.m, styles.mTypo]}>200m</Text>
              </View>
              <Image
                style={styles.separatorIcon}
                contentFit="cover"
                source={require("../assets/separator.png")}
              />
              <View style={[styles.ratings, styles.ratingsFlexBox]}>
                <Image
                  style={styles.ratingsChild}
                  contentFit="cover"
                  source={require("../assets/group-36325.png")}
                />
                <Text style={[styles.text, styles.mTypo]}>(1,293)</Text>
              </View>
            </View>
            <Text style={[styles.open, styles.mTypo]}>OPEN</Text>
          </View>
          <ScrollView
            style={[styles.item1Parent, styles.item1ParentSpaceBlock]}
            horizontal={true}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <View style={styles.frame}>
                <Image
                  style={[styles.rectangleIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle6.png")}
                />
              </View>
            </View>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <Image
                style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
                contentFit="cover"
                source={require("../assets/rectangle7.png")}
              />
            </View>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <Image
                style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
                contentFit="cover"
                source={require("../assets/rectangle8.png")}
              />
            </View>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <Image
                style={[styles.rectangleIcon3, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle9.png")}
              />
            </View>
          </ScrollView>
        </View>
      </Pressable>
      <ScrollView
        style={[styles.restaurantCard1, styles.restaurantCardSpaceBlock]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.restaurantCardScrollViewContent}
      >
        <View style={[styles.restaurantParent, styles.restaurantParentFlexBox]}>
          <View style={[styles.restaurant, styles.restaurantParentFlexBox]}>
            <View style={[styles.nameLogo, styles.ratingsFlexBox]}>
              <View style={styles.logoLayout}>
                <View style={[styles.logoChild, styles.childLayout]} />
                <Image
                  style={styles.image1Icon}
                  contentFit="cover"
                  source={require("../assets/image-1.png")}
                />
              </View>
              <View style={styles.name}>
                <Text style={[styles.mcdonalds, styles.mcdonaldsTypo]}>
                  McDonald’s
                </Text>
                <View style={styles.location}>
                  <Image
                    style={styles.vuesaxboldlocationIcon}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldlocation.png")}
                  />
                  <Text
                    style={[styles.bramleaSandalwood, styles.textClr]}
                  >{`Bramlea & Sandalwood`}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.favourite, styles.favouriteLayout]}>
              <Image
                style={styles.vuesaxboldheartIcon}
                contentFit="cover"
                source={require("../assets/vuesaxboldheart.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.frameChild, styles.item1ParentSpaceBlock]}
            contentFit="cover"
            source={require("../assets/vector-41.png")}
          />
          <View
            style={[styles.locationRatingsParent, styles.item1ParentSpaceBlock]}
          >
            <View style={styles.ratingsFlexBox}>
              <View style={[styles.distance, styles.ratingsFlexBox]}>
                <Image
                  style={styles.vuesaxboldrouteSquareIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxboldroutesquare.png")}
                />
                <Text style={[styles.m, styles.mTypo]}>200m</Text>
              </View>
              <Image
                style={styles.separatorIcon}
                contentFit="cover"
                source={require("../assets/separator.png")}
              />
              <View style={[styles.ratings, styles.ratingsFlexBox]}>
                <Image
                  style={styles.ratingsChild}
                  contentFit="cover"
                  source={require("../assets/group-36325.png")}
                />
                <Text style={[styles.text, styles.mTypo]}>(1,293)</Text>
              </View>
            </View>
            <Text style={[styles.open, styles.mTypo]}>OPEN</Text>
          </View>
          <View style={[styles.item1Group, styles.item1ParentSpaceBlock]}>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <View style={styles.frame}>
                <Image
                  style={[styles.rectangleIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/rectangle6.png")}
                />
              </View>
            </View>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <Image
                style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
                contentFit="cover"
                source={require("../assets/rectangle7.png")}
              />
            </View>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <Image
                style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
                contentFit="cover"
                source={require("../assets/rectangle8.png")}
              />
            </View>
            <View style={styles.item1Layout}>
              <View style={[styles.item1Child, styles.item1Layout]} />
              <Image
                style={[styles.rectangleIcon3, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle9.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.menuLayout]} />
        <Image
          style={[styles.menuBarItem, styles.menuBarItemLayout]}
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
            style={[styles.vectorIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
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
            style={[styles.vectorIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  restaurantCardScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  restaurantParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mSpaceBlock: {
    marginLeft: 4,
    textAlign: "left",
  },
  restaurantCardSpaceBlock: {
    padding: Padding.p_sm,
    backgroundColor: Color.light100,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  ratingsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  mcdonaldsTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  textClr: {
    color: Color.silver,
    textAlign: "left",
  },
  favouriteLayout: {
    marginLeft: 73,
    height: 40,
    borderRadius: Border.br_81xl,
  },
  item1ParentSpaceBlock: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  mTypo: {
    letterSpacing: 0.2,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  item1Layout: {
    height: 67,
    width: 68,
  },
  rectangleIconPosition: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childLayout: {
    borderRadius: Border.br_31xl,
    top: 0,
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
  iconLayout: {
    height: 20,
    width: 20,
  },
  goodAfternoonHemant: {
    top: 137,
    fontSize: FontSize.size_15xl,
    fontWeight: "300",
    fontFamily: FontFamily.workSansLight,
    textAlign: "left",
    color: Color.darkslateblue_100,
    left: 50,
    position: "absolute",
  },
  vectorIcon: {
    top: 74,
    left: 49,
    width: 27,
    height: 19,
    position: "absolute",
  },
  search: {
    width: 250,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    height: 60,
    top: 242,
    left: 50,
    position: "absolute",
  },
  meals: {
    display: "none",
  },
  groupChild: {
    width: 87,
    display: "none",
  },
  mealsParent: {
    top: 347,
    left: 75,
    width: 338,
    height: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
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
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    color: Color.darkslateblue_100,
  },
  vuesaxlinearlocationParent: {
    top: 61,
    left: 133,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.antiquewhite_100,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vuesaxlinearclockParent: {
    left: 325,
    width: 75,
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.antiquewhite_100,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    height: 60,
    top: 242,
  },
  logoLayout: {
    height: 44,
    width: 44,
  },
  mcdonalds: {
    color: Color.dark100,
    alignSelf: "stretch",
    textAlign: "left",
  },
  vuesaxboldlocationIcon: {
    width: 15,
    height: 15,
  },
  bramleaSandalwood: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.silver,
    flex: 1,
  },
  location: {
    width: 141,
    flexDirection: "row",
  },
  name: {
    marginLeft: 6,
  },
  nameLogo: {
    flex: 1,
  },
  favouriteIcon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  restaurant: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild: {
    height: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vuesaxboldrouteSquareIcon: {
    width: 16,
    height: 16,
  },
  m: {
    color: Color.dark90,
    marginLeft: 4,
    textAlign: "left",
  },
  distance: {
    width: 53,
  },
  separatorIcon: {
    width: 1,
    height: 23,
    marginLeft: 16,
  },
  ratingsChild: {
    width: 74,
    height: 14,
  },
  text: {
    color: Color.silver,
    textAlign: "left",
    marginLeft: 6,
  },
  ratings: {
    width: 118,
    marginLeft: 16,
  },
  open: {
    color: Color.systemGreen100,
    textAlign: "right",
    marginLeft: 16,
  },
  locationRatingsParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    flexDirection: "row",
  },
  item1Child: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.light80,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    width: "174.04%",
    top: "0%",
    right: "-74.04%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  frame: {
    top: 15,
    left: 2,
    width: 59,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon1: {
    height: "50.75%",
    width: "94.12%",
    top: "26.87%",
    bottom: "22.39%",
    left: "5.88%",
  },
  rectangleIcon2: {
    height: "47.76%",
    width: "91.18%",
    top: "25.37%",
    bottom: "26.87%",
    left: "8.82%",
  },
  rectangleIcon3: {
    height: "32.84%",
    width: "86.76%",
    top: "34.33%",
    right: "5.88%",
    bottom: "32.84%",
    left: "7.35%",
    position: "absolute",
  },
  item1Parent: {
    width: "100%",
  },
  restaurantParent: {
    alignSelf: "stretch",
  },
  restaurantCard: {
    top: 405,
    right: 28,
    left: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  logoChild: {
    backgroundColor: Color.firebrick,
    left: 0,
    height: 44,
    width: 44,
    position: "absolute",
  },
  image1Icon: {
    top: 14,
    left: 12,
    height: 17,
    width: 19,
    position: "absolute",
  },
  vuesaxboldheartIcon: {
    width: 18,
    height: 18,
  },
  favourite: {
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_lg,
    backgroundColor: Color.light80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  item1Group: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  restaurantCard1: {
    top: 651,
    right: 27,
    left: 29,
    opacity: 0.15,
    flex: 1,
  },
  menuBarChild: {
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
    borderRadius: Border.br_mini,
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
    color: Color.gray_100,
    letterSpacing: -0.1,
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
    color: Color.gray_100,
    letterSpacing: -0.1,
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
    color: Color.gray_100,
    letterSpacing: -0.1,
  },
  vectorIcon2: {
    top: -1,
    left: 9,
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
  home1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Home1;
