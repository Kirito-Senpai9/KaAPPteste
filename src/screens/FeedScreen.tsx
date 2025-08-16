import React from 'react';
import { FlatList, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PostCard } from '../components/PostCard';
import { colors, radius } from '../styles';

// Dados fictícios para as bolhas de stories
const stories = Array.from({ length: 5 }).map((_, i) => ({ id: `${i}` }));

export function FeedScreen({ navigation }: any) {
  // Renderiza cada bolha de story
  const renderStory = ({ item, index }: any) => (
    <TouchableOpacity style={styles.storyWrapper}>
      <Image
        source={require('../assets/newspaper.png')}
        style={[
          styles.storyItem,
          { borderColor: index < 4 ? colors.accent : 'rgba(255,255,255,0.36)' },
        ]}
      />
      {index === 4 && (
        <Image
          source={require('../assets/bell.png')}
          style={styles.storyAvatar}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={[colors.background, colors.dark]} style={styles.container}>
      <FlatList
        // Lista principal de posts
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard onPress={() => navigation.navigate('Comments')} />}
        ListHeaderComponent={
          // Carrossel de stories
          <View style={styles.storiesContainer}>
            <FlatList
              data={stories}
              keyExtractor={(item) => item.id}
              renderItem={renderStory}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.stories}
            />
          </View>
        }
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storiesContainer: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  stories: {
    alignItems: 'center',
  },
  storyWrapper: {
    marginRight: 16,
  },
  storyItem: {
    width: 59,
    height: 89,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: colors.dark,
  },
  storyAvatar: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.accent,
  },
});
