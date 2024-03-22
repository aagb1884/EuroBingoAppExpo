import { StyleSheet, View, useColorScheme, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ActiveButtons from './components/ActiveButtons';
import Winning from './components/Winning';
import GetCards from './components/GetCards';
import tickerTapeGif from './assets/ticker_tape.gif';
import { useState } from 'react';
import Header from './components/Header';

export default function App() {

  const [showGif, setShowGif] = useState(false);
  const [isBingoButtonActive, setIsBingoButtonActive] = useState(false);
  const colorScheme = useColorScheme();
  const [buttonStates, setButtonStates] = useState([false, false, false, false, false, false]);

  const handleClick = (index) => {
       const updatedButtonStates = [...buttonStates];
      updatedButtonStates[index] = !updatedButtonStates[index];
      setButtonStates(updatedButtonStates);
      
      if (updatedButtonStates.every(state => state === true)) {
          setIsBingoButtonActive(true);
      } else {
          setIsBingoButtonActive(false);
      }
  };


  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


    // list of cliches
    const EurovisionClicheArray = [
      'ciabatta smelling hipster\'s folksy simpering',
      'power ballad delivered by woman nailed to the floor',
      'nul points',
      'the singer has made a tiktok for the IDF',
      'simple staging',
      'jerky stop-motion dancing',
      'heavily symbolic tree',
      'former winner does a song',
      'former winner does some banter',
      'abba',
      'graham norton gives up',
      'graham norton is genuinely surprised',
      'graham norton mentions the staging',
      'KEY CHANGE',
      'this song\'s message is simply that the singer is incredibly horny',
      'gratuitous wind machine',
      'weird-shaped piano',
      'the hosts\' banter makes everyone clench',
      'the international jury rep tries to announce their points just as the host interrupts them by asking for their points',
      'the international jury representative sings while everyone waits for them to stop',
      'the international jury representative is drunk',
      'here\'s the esteemed old man who does the admin',
      'costume change',
      'Terry Wogan sardonic bitchiness compilation',
      'interpretive dance',
      'winking occurs',
      'fiddle playing intensifies',
      'running along the stage high-fiving the audience',
      'mullet',
      'big ass drums',
      'holding a note',
      'backing singer really going for it',
      'singer in green room notices they\'re on camera and pleads for votes',
      'actual tears',
      'parping',
      'traditional instrument',
      'singer looks into the camera',
      'singer brings in clenched fist',
      'dress is bigger than person wearing it',
      '12 points to our neighbours',
      'fire',
      'someone expresses the sentiment that war is bad',
      'someone expresses the sentiment that racism is bad',
      'topless men',
      'oiled topless men',
      'banging techno',
      'plausible incel',
      'hot pants',
      'mime',
      'liberties taken with folklore',
      'the italian entry not doing drugs',
      'green room despair enclave',
      'stilts',
      'rhyming "fire" with "higher"',
      'monochrome (aesthetics)',
      'monochrome (point about society)',
      'puffy sleeves',
      'sexy folklore',
      'ska',
      'gymnasts from the ceiling',
      'riverdance (mention of)',
      'riverdance (actual dance)',
      'ANOTHER KEY CHANGE',
      'dubstep breakdown',
      'band are related to each other',
      'lyrics like "bingy bongy boogy bongy"',
      'matching outfits',
      'running on the spot',
      'booing',
      'dancers hiding behind the singer',
      'fetish gear',
      'former junior eurovision contestant',
      "ooh you'll have someone's eye out with that",
      "saxophone",
      'goth in the matrix',
      'dance track about being possessed by the spirit of Edgar Allen Poe',
      "we're not so different, you and i",
      'surprise eye of sauron',
      'song with faintly threatening aura',
      'niche kinks being catered to',
      'human centipede',
      'incredibly localised old ladies',
      'ice skating',
      'who is this childman?',
      "everybody's talking about those kinky boots",
      "well that's not in Europe",
      "audience face paint",
      "METAL",
      "tonal whiplash",
      "bit that goes CLAPCLAPCLAPCLAP (CLAPCLAPCLAPCLAP)",
      "pleather",
      "water feature",
      "floor screaming",
      "i am reminded of the nineties and thus my own mortality",
      'hot pants',
      'regional variation on yodelling',

  ]

  //functions to randomly select six strings from cliche list
  function getCliches(EurovisionClicheArray, num) {
    const shuffled = [...EurovisionClicheArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

  const [cardArray, setCardArray] = useState(getCliches(EurovisionClicheArray, 6));

  const handleGetNewCards = () => {
    setCardArray(getCliches(EurovisionClicheArray, 6));
    setButtonStates(Array(6).fill(false));
    setIsBingoButtonActive(false);
     }



 

  return (
    <SafeAreaProvider>
      
      <View style={[styles.mainContainer, themeContainerStyle]}>
          
            <Header />
          
        <View style={styles.container}>
       
          {showGif && (
           <ImageBackground source={tickerTapeGif} resizeMode="cover" style={styles.background}></ImageBackground>
                )}
                         
          <View style={styles.mainButtonContainer}>
                 
          <GetCards 
          theme="get-cards" 
          label="get-cards" 
          onPress={handleGetNewCards}
           />
          
          <ActiveButtons 
          handleClick={handleClick}
          cardArray={cardArray} 
          setIsBingoButtonActive={setIsBingoButtonActive}
          buttonStates={buttonStates}
          />

          <Winning theme="winning" label="BINGO"
          isBingoButtonActive={isBingoButtonActive}
          setShowGif={setShowGif} 
          />       
          
          </View>
        
        </View>

      </View>
      
    </SafeAreaProvider>
  );
}




const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
    container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
   },
   background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    flexDirection: 'column',
  },
  mainButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // marginBottom: 250,
     fontSize: 40,
     fontWeight: 'bold',
     textShadowColor: 'red',
     textShadowRadius: 5,
  },
  lightContainer: {
    backgroundColor: "white"
  },
  darkContainer: {
    backgroundColor: 'black',
  },
   getCardsButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
 
});
