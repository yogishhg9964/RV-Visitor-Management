// app/screens/SignOut.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignOut = () => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to Sign Out?</Text>
      <Button title="Sign Out"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default SignOut;
