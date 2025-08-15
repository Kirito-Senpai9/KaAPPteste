import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing } from '../styles';

interface Props {
  onPress?: () => void;
}

const avatar = require('../assets/newspaper.png');
const postImage = require('../assets/bell.png');

export function PostCard({ onPress }: Props) {
  const [liked, setLiked] = React.useState(false);
  const likeScale = React.useRef(new Animated.Value(1)).current;
  const likeColor = React.useRef(new Animated.Value(0)).current;

  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

  const handleLike = () => {
    const toValue = liked ? 0 : 1;
    setLiked(!liked);
    Animated.parallel([
      Animated.spring(likeScale, {
        toValue: 1.3,
        useNativeDriver: true,
      }),
      Animated.timing(likeColor, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Animated.spring(likeScale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    });
  };

  const colorInterpolation = likeColor.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.textPrimary, '#ff2d55'],
  });

  const shareScale = React.useRef(new Animated.Value(1)).current;
  const eyeScale = React.useRef(new Animated.Value(1)).current;

  const handleShare = () => {
    Animated.sequence([
      Animated.spring(shareScale, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(shareScale, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  const handleView = () => {
    Animated.sequence([
      Animated.spring(eyeScale, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(eyeScale, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.name}>Eduardo Kaic</Text>
      </View>
      <Image source={postImage} style={styles.image} />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionGroup} onPress={handleLike}>
          <AnimatedIcon
            name={liked ? 'heart' : 'heart-outline'}
            size={22}
            color={colorInterpolation}
            style={{ transform: [{ scale: likeScale }] }}
          />
          <Text style={styles.count}>168K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionGroup} onPress={handleShare}>
          <Animated.View style={{ transform: [{ scale: shareScale }] }}>
            <Ionicons name="share-social-outline" size={22} color={colors.textPrimary} />
          </Animated.View>
          <Text style={styles.count}>168K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionGroup} onPress={handleView}>
          <Animated.View style={{ transform: [{ scale: eyeScale }] }}>
            <Ionicons name="eye-outline" size={22} color={colors.textPrimary} />
          </Animated.View>
          <Text style={styles.count}>136K</Text>
        </TouchableOpacity>
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
