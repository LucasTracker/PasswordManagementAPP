import LottieView from "lottie-react-native";
import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export function Splash(){

    const navigation = useNavigation()
    return(
        <View>
            <LottieView
            source={require("../../assets/Lock.json")}
            style={{width: "100%", height: "100%"}}
            autoPlay
            loop={false}
            onAnimationFinish={() =>
                navigation.navigate('homePage')
            }
        />
        </View>
    )
}