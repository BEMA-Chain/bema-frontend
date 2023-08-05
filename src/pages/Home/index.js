import React from 'react'
import { View, ScrollView, TouchableOpacity, Dimensions, Pressable } from 'react-native'
import {
  Container,
  HomeScroll,
  ProfileContainer,
  ProfileImage,
  ProfileText,
  RecentlyPlayedContainer,
  RecentlyPlayedDescription,
  RecentlyPlayedHeader,
  RecentlyPlayedImage,
  RecentlyPlayedTitle,
  RecommendationDescription,
  RecommendationHeader,
  RecommendationImage,
  RecommendationList,
  RecommendationListContainer,
  RecommendationMenu,
  RecommendationTextContainer,
  RecommendationTitle
} from './styles';
import { useNavigation } from '@react-navigation/native';

const recentlyPlayedList = [
  { id: 1, title: 'Song Title', description: "Artist" },
  { id: 2, title: 'Song Title 1', description: "Artist" },
  { id: 3, title: 'Song Title 2', description: "Artist" },
  { id: 4, title: 'Song Title 3', description: "Artist" },
  { id: 5, title: 'Song Title 4', description: "Artist" },
  { id: 6, title: 'Song Title 5', description: "Artist" },
];

const recommendationList = [
  { id: 1, title: "Laiba Nadeem", description: "Artist" },
  { id: 2, title: "Laiba Nadeem 1", description: "Artist" },
  { id: 3, title: "Laiba Nadeem 2", description: "Artist" }
]

const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <HomeScroll>
        {/* profile row */}
        <ProfileContainer>
          <ProfileText>Good Evening</ProfileText>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ProfileImage
              source={require('../../assets/ProfileIcon.png')}
              style={{ resizeMode: 'cover', borderRadius: 20 }}
            />
          </TouchableOpacity>
        </ProfileContainer>
        {/* recommendation container */}
        <RecommendationHeader>Recommendations</RecommendationHeader>
        {/* recommendation list */}
        {recommendationList.map((recommendItem) => (
          <RecommendationListContainer key={recommendItem.id}>
            <RecommendationList key={recommendItem.id}>
              <RecommendationImage
                source={require("../../assets/ArtistImage.png")}
              />
              <RecommendationTextContainer>
                <RecommendationTitle
                  numberOfLines={2}
                >
                  {recommendItem.title}
                </RecommendationTitle>
                <RecommendationDescription
                  numberOfLines={2}
                >
                  {recommendItem.description}
                </RecommendationDescription>
              </RecommendationTextContainer>

              <RecommendationMenu
                source={require('../../assets/MenuHorizontal.png')}
              />
            </RecommendationList>
          </RecommendationListContainer>
        ))}
        {/* recently played Container */}
        <RecentlyPlayedHeader>Recently played</RecentlyPlayedHeader>
        {/* recently played list */}
        <ScrollView>
          <RecentlyPlayedContainer>
            {recentlyPlayedList.map((playedItem, i) => {
              return (
                <View
                  key={playedItem.id}
                  style={{
                    marginTop: cardGap,
                    marginLeft: i % 2 !== 0 ? cardGap : 0,
                    width: cardWidth,
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30
                  }}
                >
                  <TouchableOpacity>
                    <RecentlyPlayedImage
                      source={require('../../assets/RecentlyPlayed.png')}
                    />
                    <RecentlyPlayedTitle>{playedItem.title}</RecentlyPlayedTitle>
                    <RecentlyPlayedDescription>{playedItem.description}</RecentlyPlayedDescription>
                  </TouchableOpacity>
                </View>
              );
            })}
          </RecentlyPlayedContainer>
        </ScrollView>
      </HomeScroll>
    </Container>

  )
}
export default Home;