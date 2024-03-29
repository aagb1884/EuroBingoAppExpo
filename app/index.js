import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Linking, Pressable, View, Text, useColorScheme, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Link, useRouter } from 'expo-router';

export default function Index () {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const themeContainerStyle =
  colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  
  const handlePress = (path) => {
    router.push(path);
  };

  return (
    <SafeAreaProvider>
      <Header />
      <ScrollView style={[styles.mainContainer, themeContainerStyle]}>
      <View style={styles.contentContainer}>
      <Text style={[styles.title, themeContainerStyle]}>
            IT'S EUROVISION TIME
      </Text>
      <Text style={[styles.mainText, themeContainerStyle]}>
      You are given six random Eurovision clichés.
      {"\n"}
      First one to witness all six gets a tiny seratonin boost.
      </Text>
      <View style={styles.buttonsContainer}>
          <Link href="/play">
            <Pressable onPress={() => handlePress('/play')} style={styles.playButton}>
                <Text style={[styles.buttonLabel]}
                >Play!</Text>
            </Pressable>
          </Link>
         
          <Link href="/instructions">
          <Pressable onPress={() => handlePress('/instructions')} style={styles.instructionsButton}>
                <Text style={[styles.buttonLabel]}
                >How to Play!</Text>
            </Pressable>
          </Link>
          <Link href="/about">
          <Pressable onPress={() => handlePress('/about')} style={styles.aboutButton}>
                <Text style={[styles.buttonLabel]}
                >About!</Text>
            </Pressable>
          </Link>
        </View>
        
      </View>
      
      </ScrollView>
      
      </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  flexDirection: 'column',
},
contentContainer: {
  alignItems: 'center'
},
title: {
  fontSize: 30, 
  fontWeight: 'bold', 
  margin: 10,
  textAlign: 'center'
},
mainText: {
  fontSize: 18,
  margin: 20,
  padding: 5,
  textAlign: 'center'
},
buttonsContainer: {
  width: 340,
  height: "100%",
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-evenly',
  borderRadius: 18,
},
buttonLabel: {
  color: 'white',
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  textShadowColor: 'black', 
    textShadowRadius: 5,
},
playButton: {
  borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  backgroundColor: '#44107a'
},
instructionsButton: {
  borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  backgroundColor: '#ff1361'
},
aboutButton: {
  borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  backgroundColor: '#FF892F'
},
lightContainer: {
  backgroundColor: "white",
  color: "black"
},
darkContainer: {
  backgroundColor: 'black',
  color: 'white'
},
})