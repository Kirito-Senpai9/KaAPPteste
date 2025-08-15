import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, spacing } from '../styles';

const avatar = require('../assets/newspaper.png');

interface Props {
  text: string;
}

export function CommentItem({ text }: Props) {
  return (
    <View style={styles.row}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: spacing.padding,
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  text: {
    color: colors.textPrimary,
    flex: 1,
  },
});
