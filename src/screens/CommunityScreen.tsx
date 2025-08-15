import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors, spacing } from '../styles';

export function CommunityScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Knights of the Blood</Text>
        <Text style={styles.status}>● 143 Online</Text>
      </View>
      <FlatList
        data={[{ name: '# Chat Geral' }, { name: 'Voice 1' }]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text
            style={styles.channel}
            onPress={() => navigation.navigate('Chat')}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  banner: {
    padding: spacing.padding,
    backgroundColor: colors.card,
  },
  bannerText: {
    color: colors.textPrimary,
    fontSize: 18,
  },
  status: {
    color: '#2ECC71',
    marginTop: 4,
  },
  channel: {
    color: colors.textPrimary,
    padding: spacing.padding,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
  },
});
