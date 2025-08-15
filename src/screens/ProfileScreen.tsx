import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone representando o perfil do usuário */}
      <Ionicons name="person-circle" size={64} color={colors.accent} />
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.textPrimary,
  },
});
