import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');
const itemWidth = viewportWidth / 2.5;

const SharedCard = ({ data }) => {

  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={{ width: itemWidth }}>
      <Image style= {styles.imageCard} source={item.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={itemWidth}
        decelerationRate="fast"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageCard: {
    width: '90%',
    height: 140,
    marginTop: 20
  },
  cardTitle: {
    color: "#D0D1D3",
    width: '90%',
    fontWeight: 600,
    fontSize: 16,
    marginTop: 20,
    fontFamily: "SF Pro Text"
  },
  cardDescription: {
    color: "#B0B2B5",
    width: '90%',
    fontWeight: 500,
    fontSize: 16,
    marginTop: 10,
    fontFamily: "SF Pro Text",
    marginBottom: 30
  }
});

export default SharedCard;


