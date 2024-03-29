import React, { useState, useEffect } from 'react';
import { View, Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { Audio } from 'expo-av';
import Toggle from './Toggle';

export default function BingoButton({ isBingoButtonActive, setShowGif, handleGetNewCards }) {
  const [fadeIn] = useState(new Animated.Value(0));
  const [sound, setSound] = useState();
  const [choirSound, setChoirSound] = useState();
  const [soundEnabled, setSoundEnabled] = useState(true);
 
  useEffect(() => {
    if (isBingoButtonActive) {
        Animated.timing(
          fadeIn,
          {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
          },
          playChoir()
        ).start()
    } else {
      Animated.timing(
        fadeIn,
        {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }
      ).start();
    }
  }, [isBingoButtonActive]);

  //play Euphoria excerpt on pressing Bingo button
  async function playSound() {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      handleGetNewCards();
    }, 7300);
    

    if (soundEnabled) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/euphoria_excerpt.mp3')
    );
    setSound(sound);
     await Audio.setAudioModeAsync({ playsInSilentModeIOS: true});
     await sound.playAsync();
    
    setTimeout(() => {
      handleGetNewCards();
          }, 7300);
    }
    
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

//play choir sound on revealing Bingo button
  async function playChoir() {
    if (soundEnabled) {
    console.log('Loading Choir Sound');
    const { sound: choirSound } = await Audio.Sound.createAsync( require('../assets/392172__random_intruder__ahhhh.wav'),
    { volume: 0.1 }
    );
    setChoirSound(choirSound);
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true});
    await choirSound.playAsync();
    setTimeout(() => {
    }, 4000);
    }
  };
    
  useEffect(() => {
    return choirSound
      ? () => {
          console.log('Unloading Sound');
          choirSound.unloadAsync();
        }
      : undefined;
  }, [choirSound]);


  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.buttonContainer, { opacity: fadeIn }]}>
        <TouchableOpacity style={styles.button}
        disabled={!isBingoButtonActive}
        onPress={playSound}>
          <Text style={styles.activeText}>BINGO</Text>
        </TouchableOpacity>
      </Animated.View>
      <Toggle 
      toggleSound={toggleSound}
      setSoundEnabled={setSoundEnabled}
      soundEnabled={soundEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 340, 
    height: 68, 
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  activeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightContainer: {
    backgroundColor: "white",
    color: 'black'
  },
  darkContainer: {
    backgroundColor: 'black',
    color: 'white'
  },

});
