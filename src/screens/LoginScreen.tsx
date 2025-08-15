import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../components/InputField';

export function LoginScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <LinearGradient colors={['#2230C3', '#000000']} style={styles.gradient}>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Informe seu e-mail</Text>
              <InputField
                placeholder=""
                keyboardType="email-address"
                style={styles.inputField}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Informe sua senha</Text>
              <InputField
                placeholder=""
                secureTextEntry
                style={styles.inputField}
              />
            </View>

            <View style={styles.socialRow}>
              <Image
                source={{ uri: 'https://placehold.co/40x40' }}
                style={styles.icon}
              />
              <Image
                source={{ uri: 'https://placehold.co/40x40' }}
                style={styles.icon}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace('AppTabs')}
            >
              <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.buttonText}>Criar Cadastro</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  flex: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#D9D9D9',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 16,
    width: 228,
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: Platform.select({
      default: 'Noto Sans Malayalam UI',
      ios: 'Noto Sans Malayalam UI',
      android: 'Noto Sans Malayalam UI',
    }),
  },
});

