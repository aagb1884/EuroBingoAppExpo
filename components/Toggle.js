import { View,  Text, StyleSheet, Switch, useColorScheme } from 'react-native';


export default function Toggle({toggleSound, soundEnabled}) {
  
 const colorScheme = useColorScheme();

  const toggleContainerStyle =
  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  return (
         <View style={[styles.soundToggleContainer, toggleContainerStyle]}>
        <Text style={[styles.soundToggleText, toggleContainerStyle]}>Sound On/Off:</Text>
        <Switch
          value={soundEnabled}
          onValueChange={toggleSound}
         
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
