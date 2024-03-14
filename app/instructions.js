import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Header from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Instructions() {
  
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <SafeAreaProvider>
    <View style={[styles.instructionContainer, themeContainerStyle]}>
      <Header />
      <View style={styles.content}>
        <Text style={[styles.title, themeTextStyle]}>
          How Does This Work Then?
        </Text>
            
        <Text style={[styles.instructions, themeTextStyle]}>
          Every time you click 'Get New Card' or refresh the Home page, you get six new Eurovision cliches.
          {"\n"}
          Every time you see or hear one of your cliches on screen during Eurovision, click it.
          {"\n"}
          The aim is to click all six.
          {"\n"}
          When you have got all six, make sure the sound is on on your device and click the now active 'Bingo' button.
          {"\n"}
          Play as many times as you want.
          {"\n"}
          You can play with any year's Eurovision show.
        </Text>
      </View>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  instructionContainer: {
    flex: 1,
    flexDirection: 'column'
    },
  content: {
    flex: 1,
    marginTop: 20,
    zIndex: 0,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  instructions: {
    fontSize: 18,
    lineHeight: 40,
  },
  lightContainer: {
    backgroundColor: "white"
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  lightThemeText: {
    color: 'black',
  },
  darkThemeText: {
    color: 'white',
  },
});