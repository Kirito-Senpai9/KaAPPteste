import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, radius, spacing } from '../styles';

interface Props {
  onPress?: () => void;
}

const avatar = require('../assets/newspaper.png');
const postImage = require('../assets/bell.png');

export function PostCard({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.name}>Eduardo Kaic</Text>
      </View>
      <Image source={postImage} style={styles.image} />
      <View style={styles.actions}>
        <View style={styles.actionGroup}>
          <FontAwesome name="heart" size={22} color={colors.textPrimary} />
          <Text style={styles.count}>168K</Text>
        </View>
        <View style={styles.actionGroup}>
          <FontAwesome name="share" size={22} color={colors.textPrimary} />
          <Text style={styles.count}>168K</Text>
        </View>
        <View style={styles.actionGroup}>
          <FontAwesome name="eye" size={22} color={colors.textPrimary} />
          <Text style={styles.count}>136K</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    marginVertical: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.padding,
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  count: {
    color: colors.textPrimary,
  },
});
