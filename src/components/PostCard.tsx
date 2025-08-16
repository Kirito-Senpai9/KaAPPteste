import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles';

interface Props {
  onPress?: () => void;
}

const postImage = require('../assets/bell.png');
const profileImage = require('../assets/newspaper.png');

export function PostCard({ onPress }: Props) {
  // Controle de animações do botão de curtida
  const [liked, setLiked] = React.useState(false);
  const likeScale = React.useRef(new Animated.Value(1)).current;
  const likeColor = React.useRef(new Animated.Value(0)).current;

  const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

  // Animação para curtir/descurtir o post
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

  // Animação simples para o botão de compartilhar
  const handleShare = () => {
    Animated.sequence([
      Animated.spring(shareScale, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(shareScale, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  // Animação simples para o botão de visualizações
  const handleView = () => {
    Animated.sequence([
      Animated.spring(eyeScale, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(eyeScale, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  return (
    // Cartão de postagem completo
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Image source={profileImage} style={styles.avatar} />
        <Text style={styles.name}>Eduardo Kaic</Text>
      </View>
      <Image source={postImage} style={styles.image} />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionGroup} onPress={handleLike}>
          <AnimatedIcon
            name={liked ? 'heart' : 'heart-outline'}
            size={20}
            color={colorInterpolation}
            style={{ transform: [{ scale: likeScale }] }}
          />
          <Text style={styles.count}>168K</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Animated.View style={{ transform: [{ scale: shareScale }] }}>
            <Ionicons name="share-social-outline" size={20} color={colors.textPrimary} />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionGroup} onPress={handleView}>
          <Animated.View style={{ transform: [{ scale: eyeScale }] }}>
            <Ionicons name="eye-outline" size={20} color={colors.textPrimary} />
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
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.dark,
    marginVertical: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 18,
    gap: 20,
  },
  avatar: {
    width: 59,
    height: 59,
    borderRadius: 30,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 231,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 24,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  count: {
    color: colors.textPrimary,
    fontSize: 12,
  },
});
