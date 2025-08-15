import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../components/InputField';
import { SocialButton } from '../components/SocialButton';
import { colors, radius } from '../styles';

export function LoginScreen({ navigation }: any) {
  return (
    <LinearGradient colors={[colors.accent, colors.dark]} style={styles.container}>
      {/* Campos de entrada de credenciais */}
      <InputField placeholder="Informe seu e-mail" />
      <InputField placeholder="Informe sua senha" secureTextEntry />

      {/* Botões sociais */}
      <View style={styles.socialRow}>
        <SocialButton name="google" />
        <SocialButton name="facebook" />
      </View>

      {/* Botão principal de login */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.replace('AppTabs')}
      >
        <Text style={styles.mainButtonText}>Fazer Login</Text>
      </TouchableOpacity>

      {/* Navegação para a tela de cadastro */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.mainButtonText}>Criar Cadastro</Text>
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
  socialRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  mainButton: {
    width: '84%',
    height: 52,
    borderRadius: radius.button,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  mainButtonText: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
});
