import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.headerContainer}>
      <LinearGradient
        colors={['#231557', '#44107a', '#ff1361', '#fff800']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
       <Text style={styles.headerText}>
        EUROVISION BINGO
      </Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity  onPress={handleMenuPress}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      
      {showMenu && (
        <View style={styles.menu}>
          <Link href="/">
            <Text style={styles.menuText}>
              • Home{"    "}{"\n"}
            </Text>
          </Link>
          <Link href="/about">
          <Text style={styles.menuText}>
          • About{"    "}{"\n"}
            </Text>
          </Link>
          <Link href="/instructions">
          <Text style={styles.menuText}>
          • How to Play{"    "}{"\n"}
            </Text>
          </Link>
        </View>
       )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { 
    backgroundColor: '#231557', 
    height: 100, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  headerText: {
    flex: 1,
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 25, 
    fontWeight: 'bold', 
    textShadowColor: 'black', 
    textShadowRadius: 5,
    marginTop: 5, 
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  menu: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    justifyItems: 'stretch', 
   },
   menuText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    textShadowColor: 'black',
    textShadowRadius: 3, 
    marginLeft: 10,
   }
})
