import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../components/InputField';
import { SocialButton } from '../components/SocialButton';
import { colors, radius } from '../styles';

export function LoginScreen({ navigation }: any) {
  return (
    <LinearGradient colors={['#4E54C8', '#8F94FB']} style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <InputField placeholder="Informe seu e-mail" />
      <InputField placeholder="Informe sua senha" secureTextEntry />
      <View style={styles.socialRow}>
        <SocialButton name="google" />
        <SocialButton name="facebook" />
      </View>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.replace('AppTabs')}
      >
        <LinearGradient
          colors={[colors.neon, colors.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.mainButtonGradient}
        >
          <Text style={styles.mainButtonText}>Fazer Login</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Register')}
      >
        <LinearGradient
          colors={[colors.accent, colors.neon]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.mainButtonGradient}
        >
          <Text style={styles.mainButtonText}>Criar Cadastro</Text>
        </LinearGradient>
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
  title: {
    fontSize: 32,
    color: colors.textPrimary,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  socialRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  mainButton: {
    width: '84%',
    height: 52,
    borderRadius: radius.button,
    marginTop: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  mainButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtonText: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
});
