import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../components/InputField';
import { colors } from '../styles';

export function RegisterScreen({ navigation }: any) {
  return (
    <LinearGradient colors={[ '#2230C3', '#000000' ]} style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Informe seu e-mail</Text>
        <InputField
          placeholder=""
          keyboardType="email-address"
          style={styles.inputField}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Crie sua senha</Text>
        <InputField
          placeholder=""
          secureTextEntry
          style={styles.inputField}
        />
      </View>

      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
  inputGroup: {
    width: 228,
    marginBottom: 16,
  },
  inputField: {
    width: '100%',
  },
  label: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 12,
    marginBottom: 8,
  },
  mainButton: {
    width: 228,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  mainButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  link: {
    marginTop: 16,
    color: colors.textPrimary,
    fontSize: 12,
    opacity: 0.9,
  },
});
