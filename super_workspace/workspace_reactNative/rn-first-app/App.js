import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default App = () => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const checkDuplication = (newGoal) => {
    goals.includes(newGoal) ? null : setGoals([...goals, newGoal]);
    setValue("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          autoCapitalize="none"
          onSubmitEditing={({ nativeEvent }) => {
            setEnteredGoal(nativeEvent.text);
            checkDuplication(nativeEvent.text);
          }}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <Button
          title="ADD"
          color="green"
          onPress={() => {
            checkDuplication(value);
          }}
        />
      </View>
      <ScrollView styles={styles.listContainer}>
        {goals.length > 0
          ? goals.map((goal, index) => (
              <TouchableOpacity
                style={styles.goalContainer}
                key={index}
                onPress={() => {
                  goals.splice(index, 1);
                  setClicked(!clicked);
                }}
              >
                <Text style={styles.goal}>{goal}</Text>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
  },
  input: {
    borderColor: "skyblue",
    borderWidth: 2,
    padding: 5,
    width: "80%",
  },
  listContainer: {
    padding: 5,
  },
  goalContainer: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 5,
    backgroundColor: "darkseagreen",
  },
  goal: {
    fontSize: 20,
    color: "white",
  },
});
