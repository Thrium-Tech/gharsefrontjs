import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const EditCardDetailsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editCardDetailsPage}>
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
      <Text style={styles.editCardDetails}>Edit Card Details</Text>
      <ImageBackground
        style={styles.editCardDetailsPageChild}
        resizeMode="cover"
        source={require("../assets/rectangle1161.png")}
      />
      <View style={[styles.unionWrapper, styles.parentFlexBox]}>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
      </View>
      <Image
        style={styles.vuesaxboldhomeIcon}
        contentFit="cover"
        source={require("../assets/vuesaxboldhome.png")}
      />
      <View
        style={[styles.vuesaxlineararrowLeftParent, styles.vectorIconPosition]}
      >
        <Image
          style={styles.vuesaxlineararrowLeftIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <TextInput
        style={[styles.editCardDetailsPageItem, styles.editCardTypo]}
        placeholder="Type Something Here"
        placeholderTextColor="#b3bfcb"
      />
      <TextInput
        style={[styles.editCardDetailsPageInner, styles.editCardTypo]}
        placeholder="Type Something Here"
        placeholderTextColor="#b3bfcb"
      />
      <Text style={[styles.cardNumber, styles.cvvTypo]}>Card Number</Text>
      <Text style={[styles.nameOnThe, styles.cvvTypo]}>Name on the Card</Text>
      <TextInput
        style={[styles.frameTextinput, styles.editCardTypo]}
        placeholder="MM/YY"
        placeholderTextColor="#b3bfcb"
      />
      <Text style={[styles.validUntil, styles.cvvTypo]}>Valid Until</Text>
      <View style={styles.typeSomethingHereWrapperPosition}>
        <Text style={[styles.typeSomethingHere, styles.paymentDetailsTypo]}>
          Type Something Here
        </Text>
      </View>
      <TextInput
        style={[
          styles.editCardDetailsPageChild1,
          styles.typeSomethingHereWrapperPosition,
        ]}
        placeholder="Type Something Here"
        placeholderTextColor="rgba(0, 43, 91, 0.4)"
      />
      <Text style={[styles.cvv, styles.cvvTypo]}>CVV</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.paymentDetailsParent, styles.parentFlexBox]}>
        <Text style={[styles.paymentDetails, styles.paymentDetailsTypo]}>
          Payment Details
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <Pressable
        style={[styles.framePressable, styles.parentFlexBox]}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <View style={[styles.vuesaxboldtickCircleParent, styles.parentFlexBox]}>
          <Image
            style={styles.vuesaxboldtickCircleIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldtickcircle.png")}
          />
          <Text style={styles.saveAndUse}>Save and Use</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIconPosition: {
    left: 28,
    position: "absolute",
  },
  editCardTypo: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  cvvTypo: {
    letterSpacing: -0.3,
    color: Color.darkslateblue_100,
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: 50,
    position: "absolute",
  },
  paymentDetailsTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  typeSomethingHereWrapperPosition: {
    backgroundColor: Color.darkslateblue_300,
    top: 750,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
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
  editCardDetails: {
    top: 127,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    left: 50,
    position: "absolute",
  },
  editCardDetailsPageChild: {
    top: 186,
    height: 193,
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  unionIcon: {
    width: 43,
    height: 14,
  },
  unionWrapper: {
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
    justifyContent: "center",
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  vuesaxboldhomeIcon: {
    top: 251,
    left: 247,
    width: 18,
    height: 18,
    position: "absolute",
  },
  vuesaxlineararrowLeftIcon: {
    width: 36,
    height: 36,
  },
  back: {
    marginLeft: 1,
    lineHeight: 16,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  vuesaxlineararrowLeftParent: {
    top: 65,
    width: 69,
    justifyContent: "flex-end",
    height: 36,
    alignItems: "center",
    flexDirection: "row",
    left: 28,
  },
  editCardDetailsPageItem: {
    top: 450,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.light80,
    fontFamily: FontFamily.manropeRegular,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  editCardDetailsPageInner: {
    top: 541,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.light80,
    fontFamily: FontFamily.manropeRegular,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  cardNumber: {
    top: 428,
    color: Color.darkslateblue_100,
  },
  nameOnThe: {
    top: 516,
    color: Color.darkslateblue_100,
  },
  frameTextinput: {
    top: 632,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.light80,
    fontFamily: FontFamily.manropeRegular,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 50,
    position: "absolute",
  },
  validUntil: {
    top: 607,
    color: Color.darkslateblue_100,
  },
  typeSomethingHere: {
    color: Color.darkslateblue_200,
    textAlign: "left",
    flex: 1,
  },
  editCardDetailsPageChild1: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
  },
  cvv: {
    top: 723,
    color: Color.darkslateblue_100,
  },
  vectorIcon: {
    top: 705,
    width: 390,
    height: 1,
  },
  paymentDetails: {
    textAlign: "center",
    width: 166,
    color: Color.darkslateblue_100,
  },
  vectorIcon1: {
    height: 19,
    opacity: 0,
    marginLeft: 4,
    flex: 1,
  },
  paymentDetailsParent: {
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
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.light100,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  vuesaxboldtickCircleParent: {
    flex: 1,
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
    justifyContent: "center",
    position: "absolute",
    width: 348,
  },
  editCardDetailsPage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_100,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default EditCardDetailsPage;
