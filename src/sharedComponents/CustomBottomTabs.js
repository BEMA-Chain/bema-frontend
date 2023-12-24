import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomBottomTabs = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedTab, setSelectedTab] = useState("Home");

  useEffect(() => {
    // Update the selected tab based on the current route name
    setSelectedTab(route.name);
  }, [route]);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    navigation.navigate(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleTabPress("Home")} style={styles.tab}>
        <Icon name="home" size={30} color={selectedTab === "Home" ? '#FFD345' : 'white'} />
        <Text style={{ color: selectedTab === "Home" ? '#FFD345' : 'white' }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('Search')} style={styles.tab}>
        <Icon name="search" size={30} color={selectedTab === 'Search' ? '#FFD345' : 'white'} />
        <Text style={{ color: selectedTab === 'Search' ? '#FFD345' : 'white' }}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('Library')} style={styles.tab}>
        <Icon name="book" size={30} color={selectedTab === 'Library' ? '#FFD345' : 'white'} />
        <Text style={{ color: selectedTab === 'Library' ? '#FFD345' : 'white' }}>Library</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '0.5px, 0px, 0px, 0px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  tab: {
    alignItems: 'center',
  },
});

export default CustomBottomTabs;
