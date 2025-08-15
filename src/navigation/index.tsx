import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../styles';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { FeedScreen } from '../screens/FeedScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { CommunityScreen } from '../screens/CommunityScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { CommentsScreen } from '../screens/CommentsScreen';
import { ChatScreen } from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 64,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.7)',
        tabBarIcon: ({ color, size }) => {
          const icons: any = {
            Feed: 'home',
            Search: 'search',
            Create: 'plus-circle',
            Community: 'users',
            Profile: 'user',
          };
          return <FontAwesome name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export function Navigation({ theme, linking, onReady }: { theme: Theme; linking?: any; onReady?: () => void }) {
  return (
    <NavigationContainer theme={theme} linking={linking} onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
