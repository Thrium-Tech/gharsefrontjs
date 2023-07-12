import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <ImageBackground
        style={styles.loginChild}
        resizeMode="cover"
        source={require("../assets/rectangle31.png")}
      />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <Pressable style={[styles.loginWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
        </Pressable>
        <Pressable style={[styles.signUpWrapper, styles.wrapperFlexBox]}>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
          </Pressable>
        </Pressable>
      </View>
      <Image
        style={styles.loginItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.loginInner}
        contentFit="cover"
        source={require("../assets/group-363301.png")}
      />
      <Text style={[styles.welcomeBack, styles.login2Typo]}>Welcome back!</Text>
      <Text style={[styles.yourFavoriteHome, styles.welcomeBackPosition]}>
        Your favorite home chefs are a click away!
      </Text>
      <TextInput
        style={[styles.frameTextinput, styles.loginChild1SpaceBlock]}
        placeholder="Enter your phone number"
        placeholderTextColor="rgba(20, 20, 20, 0.5)"
      />
      <TextInput
        style={[styles.loginChild1, styles.loginChild1SpaceBlock]}
        placeholder="Enter your Password"
        placeholderTextColor="rgba(20, 20, 20, 0.5)"
      />
      <Text style={[styles.phoneNumber, styles.passwordTypo]}>
        Phone Number
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.forgotPassword, styles.signUp1Typo]}>
        Forgot Password?
      </Text>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#f86f03", "#e05d5d"]}
      >
        <Pressable
          style={[styles.pressable, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Home1")}
        >
          <View style={[styles.loginParent, styles.parentFlexBox]}>
            <Text style={[styles.login2, styles.login2Typo]}>Login</Text>
            <Image
              style={styles.vuesaxlineararrowRightIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowright2.png")}
            />
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  login1FlexBox: {
    textAlign: "center",
    flex: 1,
  },
  signUp1Typo: {
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  login2Typo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  welcomeBackPosition: {
    left: 50,
    color: Color.darkslateblue_100,
    position: "absolute",
  },
  loginChild1SpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.light100,
    borderRadius: Border.br_sm,
    width: 348,
    left: 50,
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_mid,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  passwordTypo: {
    width: 170,
    textAlign: "left",
    left: 50,
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  loginChild: {
    top: -50,
    left: 0,
    borderRadius: Border.br_11xl,
    width: 428,
    height: 427,
    position: "absolute",
  },
  login1: {
    color: Color.light100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  loginWrapper: {
    backgroundColor: Color.darkslateblue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 151,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: -4,
      height: 4,
    },
  },
  signUp1: {
    textAlign: "center",
    flex: 1,
  },
  signUpWrapper: {
    marginLeft: 10,
    flex: 1,
  },
  frameParent: {
    top: 275,
    left: 32,
    borderRadius: Border.br_211xl,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 358,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_smi,
    paddingBottom: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.snow,
  },
  loginItem: {
    top: 58,
    left: 136,
    width: 158,
    height: 158,
    position: "absolute",
  },
  loginInner: {
    height: "12.66%",
    width: "23.83%",
    top: "7.13%",
    right: "38.79%",
    bottom: "80.22%",
    left: "37.38%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBack: {
    top: 403,
    fontSize: FontSize.size_17xl,
    letterSpacing: -0.7,
    lineHeight: 46,
    textAlign: "left",
    left: 50,
    color: Color.darkslateblue_100,
    position: "absolute",
  },
  yourFavoriteHome: {
    top: 475,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
  },
  frameTextinput: {
    top: 550,
  },
  loginChild1: {
    top: 645,
  },
  phoneNumber: {
    top: 515,
  },
  password: {
    top: 615,
  },
  forgotPassword: {
    top: 711,
    left: 253,
    textDecoration: "underline",
    textAlign: "right",
    position: "absolute",
  },
  login2: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    textAlign: "left",
    color: Color.light100,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 2,
  },
  loginParent: {
    flex: 1,
  },
  pressable: {
    marginLeft: -164,
    borderRadius: Border.br_6xl,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
    backgroundColor: "transparent",
    width: "100%",
  },
  wrapper: {
    left: "50%",
    bottom: 27,
    width: 348,
    position: "absolute",
  },
  login: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.snow,
  },
});

export default Login;
