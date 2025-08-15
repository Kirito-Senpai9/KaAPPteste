import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../components/InputField';
import { colors, radius } from '../styles';

export function RegisterScreen({ navigation }: any) {
  return (
    <LinearGradient colors={['#2E39E9', '#020013']} style={styles.container}>
      <InputField placeholder="Informe seu e-mail" />
      <InputField placeholder="Crie sua senha" secureTextEntry />
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Fazer Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButton: {
    width: '84%',
    height: 52,
    borderRadius: radius.button,
    backgroundColor: colors.lightButton,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  mainButtonText: {
    color: '#111111',
    fontWeight: 'bold',
  },
  link: {
    color: colors.textPrimary,
    marginTop: 12,
  },
});
