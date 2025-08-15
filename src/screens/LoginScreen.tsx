import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function LoginScreen({ navigation }: any) {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <LinearGradient colors={['#2230C3', '#000000']} style={styles.gradient}>
          <View style={[styles.form, { paddingHorizontal: width * 0.1 }]}> 
            <Text style={styles.label}>Informe seu e-mail</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Informe sua senha</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
            />

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
              style={[styles.button, styles.registerButton]}
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
  },
  label: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: Platform.select({
      default: 'Noto Sans Malayalam UI',
      ios: 'Noto Sans Malayalam UI',
      android: 'Noto Sans Malayalam UI',
    }),
    marginBottom: 8,
  },
  input: {
    height: 47,
    backgroundColor: 'rgba(217,217,217,0.5)',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 8,
    color: '#000',
    marginBottom: 16,
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
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D9D9D9',
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

