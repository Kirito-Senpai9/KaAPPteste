import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../components/InputField';
import { colors, radius } from '../styles';

export function RegisterScreen({ navigation }: any) {
  return (
    <LinearGradient colors={[colors.accent, colors.dark]} style={styles.container}>
      {/* Campos de cadastro do usuário */}
      <InputField placeholder="Informe seu e-mail" />
      <InputField placeholder="Crie sua senha" secureTextEntry />

      {/* Botão principal de criação de conta */}
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Criar Conta</Text>
      </TouchableOpacity>

      {/* Voltar para a tela de login */}
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
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  mainButtonText: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  link: {
    color: colors.textPrimary,
    marginTop: 12,
  },
});
