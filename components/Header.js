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
     <View style={styles.headerContent}>
      <Text style={styles.headerText}>
        EUROVISION BINGO
      </Text>
    
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Ionicons name="menu" size={35} color="#fff" />
        </TouchableOpacity>
      </View>  
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
    

  );
}

const styles = StyleSheet.create({
  headerContainer: { 
    backgroundColor: '#231557', 
    height: 100, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    
  },
  headerContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '1%'
  },
  headerText: {
    flex: 1,
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 25, 
    fontWeight: 'bold', 
    textShadowColor: 'black', 
    textShadowRadius: 5,
   },
  menuButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -15 }],
  },

  menu: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    justifyItems: 'stretch', 
    marginTop: -20
   },
   menuText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    textShadowColor: 'black',
    textShadowRadius: 3, 
    marginLeft: 10,
   }
})