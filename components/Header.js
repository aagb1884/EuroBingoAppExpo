import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={{ backgroundColor: '#231557', height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <LinearGradient
        colors={['#231557', '#44107a', '#ff1361', '#fff800']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
      <TouchableOpacity style={{ marginLeft: 20 }} onPress={handleMenuPress}>
        <Ionicons name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 5 }}>
        EUROVISION BINGO
      </Text>
      {showMenu && (
        <View style={{ flexDirection: 'column', alignItems: 'left', justifyContent: 'flex-start', marginLeft: 20, width: 100 }}>
          <Link href="/">
            <Text style={{ color: '#fff', fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 3, marginBottom: 5 }}>
              * Home
            </Text>
          </Link>
          <Link href="/about">
            <Text style={{ color: '#fff', fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 3, marginBottom: 5 }}>
              * About
            </Text>
          </Link>
          <Link href="/instructions">
            <Text style={{ color: '#fff', fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 3, marginBottom: 5 }}>
              * How to Play
            </Text>
          </Link>
        </View>
      )}
    </View>
  );
}
