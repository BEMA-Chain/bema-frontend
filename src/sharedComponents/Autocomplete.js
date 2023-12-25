import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, AsyncStorage, StyleSheet } from 'react-native';

const AutocompleteSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  // Dummy data for autocomplete suggestions
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
    'Peach',
    'Pear',
    'Plum',
  ];

  useEffect(() => {
    // Load recent searches from AsyncStorage on component mount
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    try {
      const recentSearchesString = await AsyncStorage.getItem('recentSearches');
      if (recentSearchesString) {
        const parsedRecentSearches = JSON.parse(recentSearchesString);
        setRecentSearches(parsedRecentSearches);
      }
    } catch (error) {
      console.error('Error loading recent searches:', error);
    }
  };

  const saveRecentSearches = async () => {
    try {
      await AsyncStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    } catch (error) {
      console.error('Error saving recent searches:', error);
    }
  };

  const handleInputChange = (text) => {
    setQuery(text);

    // Filter autocomplete suggestions based on the input text
    const filteredSuggestions = data.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionPress = (suggestion) => {
    setQuery(suggestion);
    addRecentSearch(suggestion);
  };

  const addRecentSearch = (searchTerm) => {
    // Add the recent search term to the list
    const updatedRecentSearches = [searchTerm, ...recentSearches.filter((term) => term !== searchTerm)];
    setRecentSearches(updatedRecentSearches);

    // Save recent searches to AsyncStorage
    saveRecentSearches();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    saveRecentSearches();
  };

  const renderSuggestion = ({ item }) => (
    <Text style={styles.suggestionItem} onPress={() => handleSuggestionPress(item)}>
      {item}
    </Text>
  );

  const renderRecentSearch = ({ item }) => (
    <Text style={styles.recentSearchItem} onPress={() => handleSuggestionPress(item)}>
      {item}
    </Text>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={query}
        onChangeText={handleInputChange}
      />

      <View style={styles.suggestionsContainer}>
        <Text style={styles.sectionHeader}>Recent Searches</Text>
        <FlatList
          data={recentSearches}
          renderItem={renderRecentSearch}
          keyExtractor={(item) => item}
          style={styles.recentSearchesList}
        />

        <Text style={styles.sectionHeader}>Autocomplete Suggestions</Text>
        <FlatList
          data={suggestions}
          renderItem={renderSuggestion}
          keyExtractor={(item) => item}
          style={styles.suggestionsList}
        />
      </View>

      <Text style={styles.clearRecentSearches} onPress={clearRecentSearches}>
        Clear Recent Searches
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: "#2F2F2F"
  },
  suggestionsContainer: {
    marginTop: 10,
  },
  suggestionsList: {
    marginTop: 10,
  },
  recentSearchesList: {
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  recentSearchItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
  clearRecentSearches: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AutocompleteSearch;
