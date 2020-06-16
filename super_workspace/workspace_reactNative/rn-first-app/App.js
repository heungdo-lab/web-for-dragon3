import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default App = () => {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          autoCapitalize="none"
          style={{
            borderColor: "skyblue",
            borderWidth: 2,
            padding: 5,
            width: "80%",
          }}
        />
        <Button title="ADD" color="green" />
      </View>
      <View></View>
    </View>
  );
};
