import { View, Text, StyleSheet, useColorScheme, Linking } from 'react-native';
import Header from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function About () {
  
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <SafeAreaProvider>
        <View style={[styles.aboutContainer, themeContainerStyle]}>
        <Header />   

            <View style={styles.content}>

                <Text style={[styles.title, themeTextStyle]}>
                About Eurovision Bingo
                </Text>

                <View style={styles.about}>
                    <Text style={styles.textContent}>
                <Text style={themeTextStyle}>This began as a React JS app hosted on Surge, written in a week before the 2023 Eurovision.</Text>
                <Text style={themeTextStyle}>I have added a few features since the initial version, but the gameplay remains essentially the same.{"\n"}</Text> 
                <Text style={[themeTextStyle, styles.textContent2]}>
                {"\n"}New features include:
                {"\n"}
                       * Bingo button disabled until all six buttons are pressed.
                {"\n"}
                        * Ticker tape fanfare on winning.
                {"\n"}
                       * New Eurovision clichés added.
                {"\n"}
                </Text> 
                </Text>
                
                </View>
                
                <View style={styles.links}>
                <Text style={[styles.title, themeTextStyle]}>
                
                </Text>
                    <View style={styles.link1}>
                    <Text style={[themeTextStyle, styles.textContent2]}>Created by </Text>
                    <Text
                        style={{color: 'skyblue', textAlign: 'center', fontSize: 18}}
                        onPress={() => Linking.openURL('https://andrewblair.co.uk/')}>
                        Andrew Blair.
                    </Text>
                    </View>
                    <View style={styles.link2}>
                    <Text style={[themeTextStyle, styles.textContent2]}>Web browser version can be found </Text>
                    <Text
                        style={{color: 'skyblue', textAlign: 'center', fontSize: 18}}
                        onPress={() => Linking.openURL('https://andrewblair.co.uk/apps/eurovision-bingo')}>
                        here.
                    </Text>
                    </View>
                    <View style={styles.link3}>
                    <Text style={[themeTextStyle, styles.textContent2]}>If you have enjoyed this app please consider making a donation to </Text>
                    <Text
                        style={{color: 'skyblue', textAlign: 'center', fontSize: 18}}
                        onPress={() => Linking.openURL('https://msf.org.uk/secure/donate/102424')}>
                        Doctors Without Borders.
                    </Text>
                    
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
        
       },
       textContent2: {
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center'
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

})