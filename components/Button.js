import { StyleSheet, View, Pressable, Text } from 'react-native';


export default function Button({ isActive, cliche, onPress, index}) {

  return (
    <View style={[styles.buttonContainer]}>
    <Pressable
      style={[isActive ? styles.active : styles.button]}
      onPress={onPress}
      testID={`card-button-${index}`}
    >
     
      <Text style={[isActive ? styles.activeText : styles.buttonLabel]}>{cliche}</Text>
    </Pressable>
  </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 340,
    height: "auto",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 18,
    },
    
  button: {
    backgroundColor: "#FF1361",
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    
  },
   buttonLabel: {
    color: '#25292e',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
   active: {
   borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 5,
    backgroundColor: '#231557', 
  },
   activeText: {
       color: '#fff', 
       fontSize: 20,
       fontWeight: "bold",
       textAlign: "center"
  },
});
