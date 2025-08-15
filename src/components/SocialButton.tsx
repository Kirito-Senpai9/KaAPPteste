import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../styles';

interface Props {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  onPress?: () => void;
}

export function SocialButton({ name, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name={name} size={24} color={colors.dark} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightButton,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
