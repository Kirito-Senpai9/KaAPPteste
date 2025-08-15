import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.wrapper}>
      <LinearGradient colors={['#2230C3', '#000000']} style={styles.container}>
        <Text style={[styles.label, styles.emailLabel]}>Informe seu e-mail</Text>
        <TextInput
          style={[styles.input, styles.emailInput]}
          keyboardType="email-address"
        />

        <Text style={[styles.label, styles.passwordLabel]}>informe sua senha</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          secureTextEntry
        />

        <Image
          source={{ uri: 'https://placehold.co/40x40' }}
          style={[styles.icon, styles.googleIcon]}
        />
        <Image
          source={{ uri: 'https://placehold.co/40x40' }}
          style={[styles.icon, styles.facebookIcon]}
        />

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.replace('AppTabs')}
        >
          <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Criar Cadastro</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
  },
  container: {
    width: 412,
    height: 917,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 16,
  },
  label: {
    position: 'absolute',
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  emailLabel: {
    left: 92,
    top: 407,
  },
  passwordLabel: {
    left: 92,
    top: 491,
    textTransform: 'none',
  },
  input: {
    position: 'absolute',
    width: 228,
    height: 47,
    backgroundColor: 'rgba(217,217,217,0.50)',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 8,
    color: '#000',
  },
  emailInput: {
    left: 92,
    top: 435,
  },
  passwordInput: {
    left: 92,
    top: 511,
  },
  icon: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  googleIcon: {
    left: 160,
    top: 575,
  },
  facebookIcon: {
    left: 206,
    top: 575,
  },
  button: {
    position: 'absolute',
    width: 228,
    height: 45,
    backgroundColor: '#D9D9D9',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    left: 88,
    top: 631,
  },
  registerButton: {
    left: 88,
    top: 692,
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
});
