import React, { useState, useEffect } from 'react';
import { View, Animated, TouchableOpacity, Text, StyleSheet, Switch, useColorScheme } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { Audio } from 'expo-av';

export default function BingoButton({ isBingoButtonActive, setShowGif }) {
  const [fadeIn] = useState(new Animated.Value(0));
  const [sound, setSound] = useState();
  const [choirSound, setChoirSound] = useState();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const colorScheme = useColorScheme();

  const toggleContainerStyle =
  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

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
    }, 7300);

    if (soundEnabled) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/euphoria_excerpt.mp3')
    );
    setSound(sound);

    await sound.playAsync();
    
    setTimeout(() => {
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
    { volume: 0.05 }
    );
    setChoirSound(choirSound);

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
      <View style={[styles.soundToggleContainer, toggleContainerStyle]}>
        <Text style={[styles.soundToggleText, toggleContainerStyle]}>Sound On/Off:</Text>
        <Switch
          value={soundEnabled}
          onValueChange={toggleSound}
         
        />
      </View>
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
  soundToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  },
  soundToggleText: {
    marginRight: 10,
    
  },
});
