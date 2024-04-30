import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Home, Library, Search } from '@/assets/icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000000',
                    paddingBottom: 14,
                    borderTopColor: '#fff',
                    height: 70,
                },
                tabBarLabelStyle: {
                    // Customize label text styles here
                    fontFamily: 'Roboto', // Replace with your desired font family
                    fontSize: 12, // Set font size
                    textAlign: 'right', // Center the text
                    marginTop: -10,
                },

            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Home color={color} />,

                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search ',
                    tabBarIcon: ({ color }) => <Search color={color} />,
                }}
            />
            <Tabs.Screen
                name="(library)"
                options={{
                    title: 'Library',
                    tabBarIcon: ({ color }) => <Library color={color} />,
                }}
            />
        </Tabs>
    );
}
