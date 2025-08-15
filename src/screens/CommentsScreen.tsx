import React from 'react';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { PostCard } from '../components/PostCard';
import { CommentItem } from '../components/CommentItem';
import { colors, spacing } from '../styles';
import { FontAwesome } from '@expo/vector-icons';

export function CommentsScreen() {
  return (
    <View style={styles.container}>
      {/* Post principal e lista de comentários */}
      <FlatList
        ListHeaderComponent={<PostCard />}
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <CommentItem text="Comentário" />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <View style={styles.inputRow}>
        <TouchableOpacity>
          <FontAwesome name="image" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Digite um comentário"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TouchableOpacity>
          <FontAwesome name="send" size={24} color={colors.accent} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.padding,
    backgroundColor: colors.dark,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    color: colors.textPrimary,
  },
});
