import { StyleSheet, View, Pressable, Text } from 'react-native';


export default function GetCards({ onPress }) {

  return (
        <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable
              style={[styles.button, { backgroundColor: "yellow" }]}
              onPress={onPress}
            >
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>New Cards</Text>
            </Pressable>
          </View>
      );
    }

      const styles = StyleSheet.create({
        buttonContainer: {
          width: 340,
          height: 68,
          marginTop: 20,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        },
        button: {
          borderRadius: 10,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
         buttonLabel: {
          color: '#fff',
          fontSize: 18,
          fontWeight: "bold",
          textAlign: 'center',
        },
      });
      