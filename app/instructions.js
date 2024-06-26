import React from 'react';
import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import Header from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Instructions() {
  
  const colorScheme = useColorScheme();
  
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <SafeAreaProvider>
      <Header />
    <ScrollView style={[styles.instructionContainer, themeContainerStyle]}>
      
      <View style={styles.content}>
        <Text style={[styles.title, themeTextStyle]}>
          How To Play
        </Text>
            
        <Text style={[styles.instructions, themeTextStyle]}>
        • Every time you click 'Get New Card' or refresh the Home page, you get six new Eurovision clichés.
          {"\n"}
          • Every time you see or hear one of your clichés on screen during Eurovision, click it. 
          {"\n"}
          • Unclicked buttons are pink. Clicked buttons are purple.
          {"\n"}
          • The aim is to click all six.
          {"\n"}
          • When you have got all six, the Bingo button will appear. Press it to receive your fanfare.
          {"\n"}
          • NB. There will be noises at this point. You can either mute your phone or use the Sound On/Off toggle at the bottom of the Play Screen to remove this.
          {"\n"}
          • The bingo card will then reset, giving you six new unclicked buttons.
          {"\n"}
          • Play as many times as you want.
          {"\n"}
          • You can play with any year's Eurovision show.
        </Text>
      </View>
    </ScrollView>
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
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
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