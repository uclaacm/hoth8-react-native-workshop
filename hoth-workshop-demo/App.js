import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyledButton from './src/components/StyledButton';

export default function App() {
  const [count, setCount] = useState(0); // state hook

  const incrementCount = () => {
    setCount(prevCount => ++prevCount);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Component Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <StyledButton
        text="Increment"
        onPress={incrementCount}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  counter: {
    fontSize: 75,
    fontWeight: "700",
    marginBottom: 50,
  }
})