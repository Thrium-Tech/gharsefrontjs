import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const EditAddressPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.editAddressPage, styles.iconLayout]}>
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
      <Text style={[styles.deliveryDetails, styles.editAddressTypo]}>
        Delivery details
      </Text>
      <Text style={[styles.editAddress, styles.editAddressTypo]}>
        Edit Address
      </Text>
      <ImageBackground
        style={styles.editAddressPageChild}
        resizeMode="cover"
        source={require("../assets/rectangle1161.png")}
      />
      <View style={[styles.vuesaxlineargpsParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlineargpsIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlineargps.png")}
        />
        <Text style={[styles.pinLocation, styles.addressSpaceBlock]}>
          Pin Location
        </Text>
      </View>
      <Image
        style={styles.editAddressPageItem}
        contentFit="cover"
        source={require("../assets/rectangle-1163.png")}
      />
      <View style={styles.editAddressPageInner} />
      <Image
        style={styles.vuesaxboldhomeIcon}
        contentFit="cover"
        source={require("../assets/vuesaxboldhome1.png")}
      />
      <Pressable
        style={styles.vuesaxlineararrowLeftParent}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <Image
          style={[
            styles.vuesaxlineararrowLeftIcon,
            styles.meetOutsideHouseWrapperPosition,
          ]}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <TextInput
        style={[styles.frameTextinput, styles.editChildTypo]}
        placeholder="Type Something Here"
        placeholderTextColor="#b3bfcb"
      />
      <TextInput
        style={[styles.editAddressPageChild1, styles.editChildTypo]}
        placeholder="Type Something Here"
        placeholderTextColor="#b3bfcb"
      />
      <View style={styles.editAddressPageChild2Position}>
        <Text style={[styles.typeSomethingHere, styles.addressTypo]}>
          Type Something Here
        </Text>
      </View>
      <TextInput
        style={[
          styles.editAddressPageChild2,
          styles.editAddressPageChild2Position,
        ]}
        placeholder="Type Something Here"
        placeholderTextColor="rgba(0, 43, 91, 0.4)"
      />
      <Text style={[styles.aptSuite, styles.aptSuiteTypo]}>
        Apt / Suite / Floor
      </Text>
      <Text style={[styles.businessBuilding, styles.aptSuiteTypo]}>
        Business / Building Name
      </Text>
      <Text style={[styles.addInstructions, styles.aptSuiteTypo]}>
        Add Instructions
      </Text>
      <ScrollView
        style={styles.frameParent}
        horizontal={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.leaveAtDoorstepWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.leaveAtDoorstep, styles.saveAndUseTypo]}>
            Leave at Doorstep
          </Text>
        </View>
        <View style={[styles.inPersonHandoffWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.inPersonHandoff, styles.leaveAtDoorstepLayout]}>
            In-Person Handoff
          </Text>
        </View>
        <View style={[styles.meetOutsideHouseWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.inPersonHandoff, styles.leaveAtDoorstepLayout]}>
            Meet Outside House
          </Text>
        </View>
      </ScrollView>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.vuesaxlinearlocationParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlinearlocationIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearlocation3.png")}
        />
        <Text style={[styles.address, styles.addressTypo]}>Address</Text>
      </View>
      <Pressable style={[styles.framePressable, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vuesaxboldtickCircleIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldtickcircle.png")}
          />
          <Text style={[styles.saveAndUse, styles.saveAndUseTypo]}>
            Save and Use
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  editAddressTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  addressSpaceBlock: {
    marginLeft: 4,
    color: Color.darkslateblue_100,
  },
  meetOutsideHouseWrapperPosition: {
    top: 0,
    position: "absolute",
  },
  editChildTypo: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  addressTypo: {
    lineHeight: 23,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    letterSpacing: -0.2,
  },
  editAddressPageChild2Position: {
    top: 753,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.darkslateblue_300,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  aptSuiteTypo: {
    letterSpacing: -0.3,
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
    color: Color.darkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: 50,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  saveAndUseTypo: {
    color: Color.light100,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  leaveAtDoorstepLayout: {
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  deliveryDetails: {
    top: 628,
    fontSize: FontSize.size_2xl,
    lineHeight: 24,
    color: Color.dark100,
    textAlign: "left",
    left: 50,
    position: "absolute",
    letterSpacing: -0.2,
  },
  editAddress: {
    top: 127,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.dark100,
    textAlign: "left",
    left: 50,
    position: "absolute",
  },
  editAddressPageChild: {
    top: 186,
    height: 193,
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  vuesaxlineargpsIcon: {
    width: 20,
    height: 20,
  },
  pinLocation: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.darkslateblue_100,
    flex: 1,
  },
  vuesaxlineargpsParent: {
    marginLeft: -101,
    top: 354,
    backgroundColor: Color.light100,
    borderStyle: "solid",
    borderColor: "#002b5b",
    borderWidth: 1.5,
    width: 221,
    paddingHorizontal: Padding.p_16xl,
    paddingVertical: Padding.p_mini,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  editAddressPageItem: {
    top: 228,
    left: 219,
    width: 74,
    height: 77,
    position: "absolute",
  },
  editAddressPageInner: {
    top: 246,
    left: 241,
    width: 30,
    height: 30,
    backgroundColor: Color.darkslateblue_300,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  vuesaxboldhomeIcon: {
    top: 251,
    left: 247,
    width: 18,
    height: 18,
    position: "absolute",
  },
  vuesaxlineararrowLeftIcon: {
    left: 0,
    width: 36,
    height: 36,
  },
  back: {
    top: 11,
    left: 37,
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vuesaxlineararrowLeftParent: {
    top: 65,
    left: 28,
    width: 69,
    height: 36,
    position: "absolute",
  },
  frameTextinput: {
    top: 450,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    backgroundColor: Color.light80,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  editAddressPageChild1: {
    top: 541,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    backgroundColor: Color.light80,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  typeSomethingHere: {
    color: Color.darkslateblue_200,
    flex: 1,
  },
  editAddressPageChild2: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  aptSuite: {
    top: 428,
  },
  businessBuilding: {
    top: 516,
  },
  addInstructions: {
    top: 726,
  },
  leaveAtDoorstep: {
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
  },
  leaveAtDoorstepWrapper: {
    backgroundColor: Color.dark90,
    zIndex: 0,
  },
  inPersonHandoff: {
    color: Color.dark90,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  inPersonHandoffWrapper: {
    zIndex: 1,
    marginLeft: 6,
    backgroundColor: Color.light80,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
  },
  meetOutsideHouseWrapper: {
    left: 301,
    zIndex: 2,
    backgroundColor: Color.light80,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 667,
    left: 39,
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    top: 610,
    left: 29,
    width: 390,
    height: 1,
    position: "absolute",
  },
  vuesaxlinearlocationIcon: {
    width: 19,
    height: 19,
  },
  address: {
    marginLeft: 4,
    color: Color.darkslateblue_100,
  },
  vuesaxlinearlocationParent: {
    top: 61,
    left: 133,
    borderRadius: Border.br_xs,
    backgroundColor: Color.antiquewhite_100,
    width: 190,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
  },
  vuesaxboldtickCircleIcon: {
    width: 24,
    height: 24,
  },
  saveAndUse: {
    marginLeft: 5,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
  },
  framePressable: {
    marginLeft: -164,
    bottom: 32,
    borderRadius: Border.br_lg,
    backgroundColor: Color.darkorange,
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    width: 348,
  },
  editAddressPage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    height: 926,
    flex: 1,
  },
});

export default EditAddressPage;
