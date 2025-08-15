import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { PostCard } from '../components/PostCard';
import { colors } from '../styles';

export function FeedScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard onPress={() => navigation.navigate('Comments')} />}
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
});
