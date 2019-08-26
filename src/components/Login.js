import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { styles } from "../assets/styles";
import Svg from "react-native-svg";
import SvgUri from "react-native-svg-uri";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#1488cc", "#0e9aa7"]}
          style={styles.gradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View style={styles.icon}>
            <Image
              source={require("../assets/images/kisspng-adidas-originals-adidas-superstar-swoosh-reebok-adidas-5b22d53e1eeb48.1089314515290094701267.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50
              }}
            />
          </View>
          <View style={{ backgroundColor: "skyblue" }} />
        </LinearGradient>
      </View>
    );
  }
}
export default Login;
