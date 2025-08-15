import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { colors, radius, spacing } from '../styles';

export function InputField({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="rgba(255,255,255,0.7)"
      style={[styles.input, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '82%',
    height: 48,
    borderRadius: radius.input,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: spacing.padding,
    color: colors.textPrimary,
    marginVertical: 8,
  },
});
