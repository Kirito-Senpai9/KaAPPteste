import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PostCard } from '../components/PostCard';

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
          { borderColor: index < 4 ? '#2DFD30' : 'rgba(255,255,255,0.36)' },
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
    <View style={styles.container}>
      <FlatList
        // Lista principal de posts
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard onPress={() => navigation.navigate('Comments')} />}
        ListHeaderComponent={
          // Carrossel de stories
          <FlatList
            data={stories}
            keyExtractor={(item) => item.id}
            renderItem={renderStory}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.stories}
          />
        }
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
  },
  stories: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  storyWrapper: {
    marginRight: 16,
  },
  storyItem: {
    width: 59,
    height: 89,
    borderRadius: 15,
    borderWidth: 2,
  },
  storyAvatar: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});
