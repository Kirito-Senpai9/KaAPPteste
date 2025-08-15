import React from 'react';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { colors, spacing } from '../styles';
import { FontAwesome } from '@expo/vector-icons';

export function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho do chat */}
      <View style={styles.header}>
        <Text style={styles.title}>Chat Geral</Text>
        <FontAwesome name="cog" size={24} color={colors.textPrimary} />
      </View>

      {/* Mensagens do chat */}
      <FlatList
        data={[1,2,3]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <Text style={styles.message}>Mensagem</Text>}
        contentContainerStyle={{ padding: spacing.padding }}
      />

      {/* Área de inserção de mensagem */}
      <View style={styles.inputRow}>
        <FontAwesome name="paperclip" size={24} color={colors.textPrimary} />
        <FontAwesome name="image" size={24} color={colors.textPrimary} style={{ marginLeft: 10 }} />
        <FontAwesome name="smile-o" size={24} color={colors.textPrimary} style={{ marginLeft: 10 }} />
        <TextInput
          style={styles.input}
          placeholder="Mensagem"
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
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.padding,
    backgroundColor: colors.card,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
  },
  message: {
    color: colors.textPrimary,
    marginVertical: 4,
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
