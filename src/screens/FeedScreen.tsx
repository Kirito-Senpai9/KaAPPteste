import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PostCard } from '../components/PostCard';
import { colors } from '../styles';

const stories = Array.from({ length: 10 }).map((_, i) => ({ id: `${i}`, seen: i % 3 === 0 }));

export function FeedScreen({ navigation }: any) {
  const renderStory = ({ item }: any) => (
    <TouchableOpacity>
      <View style={[styles.storyItem, !item.seen && styles.unseen]}>
        <Image source={require('../assets/newspaper.png')} style={styles.storyImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard onPress={() => navigation.navigate('Comments')} />}
        ListHeaderComponent={
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
    backgroundColor: colors.background,
    paddingHorizontal: 0,
  },
  stories: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  storyItem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unseen: {
    borderColor: '#39FF14',
  },
  storyImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});
