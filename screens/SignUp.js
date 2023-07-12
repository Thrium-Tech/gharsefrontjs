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
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <ImageBackground
        style={styles.signUpChild}
        resizeMode="cover"
        source={require("../assets/rectangle31.png")}
      />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <Pressable style={[styles.loginWrapper, styles.wrapperFlexBox]}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
          </Pressable>
        </Pressable>
        <Pressable style={[styles.signUpWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.signUp1, styles.login1Typo]}>Sign Up</Text>
        </Pressable>
      </View>
      <Image
        style={styles.signUpItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.signUpInner}
        contentFit="cover"
        source={require("../assets/group-36330.png")}
      />
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome!</Text>
      <Text style={[styles.wereGladTo, styles.welcomePosition]}>
        We’re glad to see you on our platform.
      </Text>
      <TextInput
        style={[styles.frameTextinput, styles.signChildSpaceBlock]}
        placeholder="Enter your phone number"
        placeholderTextColor="rgba(20, 20, 20, 0.5)"
      />
      <TextInput
        style={[styles.signUpChild1, styles.signChildSpaceBlock]}
        placeholder="Enter your Password"
        placeholderTextColor="rgba(20, 20, 20, 0.5)"
      />
      <Text style={[styles.phoneNumber, styles.passwordTypo]}>
        Phone Number
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <TextInput
        style={[styles.signUpChild2, styles.signChildSpaceBlock]}
        placeholder="Enter your Password"
        placeholderTextColor="rgba(20, 20, 20, 0.5)"
      />
      <Text style={[styles.confirmYourPassword, styles.welcomePosition]}>
        Confirm your password
      </Text>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#f86f03", "#e05d5d"]}
      >
        <Pressable
          style={[styles.pressable, styles.parentFlexBox]}
          onPress={() => navigation.navigate("SN$20:155$")}
        >
          <View style={[styles.signUpParent, styles.parentFlexBox]}>
            <Text style={[styles.signUp2, styles.welcomeTypo]}>Sign-up</Text>
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
  login1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    flex: 1,
  },
  welcomeTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  welcomePosition: {
    left: 50,
    color: Color.darkslateblue_100,
    position: "absolute",
  },
  signChildSpaceBlock: {
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
  signUpChild: {
    top: -50,
    left: 0,
    borderRadius: Border.br_11xl,
    width: 428,
    height: 427,
    position: "absolute",
  },
  login1: {
    color: Color.darkslateblue_100,
    textAlign: "center",
  },
  loginWrapper: {
    width: 151,
  },
  signUp1: {
    color: Color.gray_100,
  },
  signUpWrapper: {
    backgroundColor: Color.darkslateblue_100,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginLeft: 10,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: -4,
      height: 4,
    },
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
  signUpItem: {
    top: 58,
    left: 136,
    width: 158,
    height: 158,
    position: "absolute",
  },
  signUpInner: {
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
  welcome: {
    top: 405,
    fontSize: FontSize.size_17xl,
    letterSpacing: -0.7,
    lineHeight: 46,
    textAlign: "left",
    left: 50,
    color: Color.darkslateblue_100,
    position: "absolute",
  },
  wereGladTo: {
    top: 475,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    left: 50,
  },
  frameTextinput: {
    top: 550,
  },
  signUpChild1: {
    top: 645,
  },
  phoneNumber: {
    top: 515,
  },
  password: {
    top: 615,
  },
  signUpChild2: {
    top: 745,
  },
  confirmYourPassword: {
    top: 715,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.size_mid,
    left: 50,
  },
  signUp2: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.light100,
    textAlign: "left",
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 2,
  },
  signUpParent: {
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
  signUp: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.snow,
  },
});

export default SignUp;
