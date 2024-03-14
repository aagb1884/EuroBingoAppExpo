import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';



export default function Winning({ isBingoButtonActive, setShowGif}) {
    const [sound, setSound] = useState();
    

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/euphoria_excerpt.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
        setShowGif(true);

        setTimeout(() => {
            setShowGif(false);
          }, 7300);
        };
      
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

  

      return (
        <View 
        
        style={isBingoButtonActive? styles.buttonContainerActive: styles.buttonContainer}>
          
            <Pressable 
            disabled={!isBingoButtonActive}
            onPress={playSound}
            style={[isBingoButtonActive ? styles.button : styles.disabled]}
                       >
              <Text style={[isBingoButtonActive ? styles.activeText : styles.buttonLabel]}>BINGO</Text>
            </Pressable>
          
        </View>
      );
    }



      const styles = StyleSheet.create({
        buttonContainer: {
          width: 340,
          height: 68,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
          borderRadius: 18,
        },
        buttonContainerActive: {
          width: 320,
          height: 68,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
          borderWidth: 4,
          borderRadius: 18,
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
        disabled: {
          borderRadius: 10,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#8C8C8C', 
          color: '#fff', 
          opacity: 0.5,
          },
         buttonLabel: {
          color: 'black',
          fontSize: 20,
          fontWeight: "bold",
          textAlign: 'center',
         },
          activeText: {
            color: 'black', 
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center"
       },
     });
      