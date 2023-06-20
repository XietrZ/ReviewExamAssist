/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import QuestionAnswerScreen from "./screens/QuestionAnswerScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen} // HomeScreen.js
              options={{ headerShown: false }} // Remove the Home label above
            />
            <Stack.Screen
              name="QuestionAnswerScreen"
              component={QuestionAnswerScreen} // HomeScreen.js
              options={{ headerShown: false }} // Remove the Home label above
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

registerRootComponent(App);
