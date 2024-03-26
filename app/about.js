import { View, Text, StyleSheet, useColorScheme, Linking } from 'react-native';
import Header from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function About () {
  
    const colorScheme = useColorScheme();

    
    const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <SafeAreaProvider>
        <View style={[styles.aboutContainer, themeContainerStyle]}>
        <Header />   

            <View style={styles.content}>

                <Text style={[styles.title, themeContainerStyle]}>
                About Eurovision Bingo
                </Text>

                <View style={styles.about}>
                    
                <Text style={[styles.textContent, themeContainerStyle]}>
                This began as a React JS app hosted on Surge, written in a week before the 2023 Eurovision.
                {" "}I have added a few features since the initial version, but the gameplay remains essentially the same.{"\n"}
                {"\n"}New features include:
                {"\n"}
                • Bingo button disabled until all six buttons are pressed.
                {"\n"}
                • Ticker tape fanfare on winning.
                {"\n"}
                • New Eurovision clichés added.
                {"\n"}
                </Text>       
                </View>
                
                <View style={styles.links}>
                   <View style={styles.link1}>
                    <Text style={[styles.textContent2, themeContainerStyle]}>Created by </Text>
                    <Text
                        style={{color: 'skyblue', fontSize: 18}}
                        onPress={() => Linking.openURL('https://andrewblair.co.uk/')}>
                        Andrew Blair.
                    </Text>
                    </View>
                    <View style={styles.link2}>
                    <Text
                        style={{color: 'skyblue', textAlign: 'center', fontSize: 18}}
                        onPress={() => Linking.openURL('https://andrewblair.co.uk/apps/eurovision-bingo')}>
                        Original Web Browser Version.
                    </Text>
                    </View>
                    <View style={styles.link3}>
                    <Text style={[styles.textContent2, themeContainerStyle]}>If you have enjoyed this app please consider making a donation to </Text>
                    <Text
                        style={{color: 'skyblue', textAlign: 'center', fontSize: 18}}
                        onPress={() => Linking.openURL('https://msf.org.uk/secure/donate/102424')}>
                        Doctors Without Borders.
                    </Text>
                    
                    </View>
                    <View>
    <Text style={[styles.textContent3, styles.linkText, themeContainerStyle]}>{"\n"}Audio Credit:</Text>
  <Text 
  
    style={[styles.textContent, themeContainerStyle]} 
    onPress={() => Linking.openURL('https://freesound.org/s/392172/')}>
    AHHHH by random_intruder</Text>
    <Text style={[themeContainerStyle, styles.textContent]}>License: Creative Commons 0</Text>
  </View>
                    
                </View>
                </View>
            </View>
        
        </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        flexDirection: 'column',
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
        margin: 10,
      },
      about: {
        flex: 1,
        
       },
       textContent: {
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'center',
       },
       textContent2: {
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center'
       },
       textContent3: {
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold',
       },
      links: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center'
      },
      link1: {
        flexDirection: 'row',
      },
      link2: {
        paddingTop: 10,
      },
      link3: {
        paddingTop: 10,
        textAlign: 'center'
      },
      linkText: {
        textAlign: 'center'
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