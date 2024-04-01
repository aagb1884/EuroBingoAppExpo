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
     <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Ionicons name="menu" size={40} color="#fff" />
        </TouchableOpacity>
      <Text style={styles.headerText}>
        EUROVISION BINGO
      </Text>      
      </View>  
        {showMenu && (
        <View style={styles.menu}>
          <Link href="/">
            <Text style={styles.menuText}>
              • Home{"    "}{"\n"}
            </Text>
          </Link>
          <Link href="/play">
            <Text style={styles.menuText}>
              • Play{"    "}{"\n"}
            </Text>
          </Link>
          <Link href="/instructions">
          <Text style={styles.menuText}>
          • How to Play{"    "}{"\n"}
            </Text>
          </Link>
          <Link href="/about">
          <Text style={styles.menuText}>
          • About{"    "}{"\n"}
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
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    margin: '5%'
  },
  headerText: {
    justifyContent: 'center',
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold', 
    textShadowColor: 'black', 
    textShadowRadius: 5,
    paddingLeft: '5%',
   },
  menuButton: {
  
  },

  menu: { 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    justifyItems: 'stretch', 
    
   },
   menuText: { 
    color: '#fff', 
    fontSize: 20,
    fontWeight: 'bold', 
    textShadowColor: 'black',
    textShadowRadius: 3, 
    marginLeft: 10,
    backgroundColor: 'rgba(255, 240, 3, 0.2)'
   }
})