import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../styles';

interface Props {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  onPress?: () => void;
}

export function SocialButton({ name, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.shadow} onPress={onPress}>
      <LinearGradient
        colors={[colors.accent, colors.neon]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <FontAwesome name={name} size={24} color={colors.dark} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shadow: {
    marginHorizontal: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
