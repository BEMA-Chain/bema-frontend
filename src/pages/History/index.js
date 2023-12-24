import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AreaHeaderTitle,
  ArrowBack,
  ArrowBackIcon,
  Container,
  HeaderRegister,
  HeaderTitle,
  HistoryDescription,
  HistoryImage,
  HistoryList,
  HistoryListContainer,
  HistoryListHeading,
  HistoryMenu,
  HistoryTextContainer,
  HistoryTitle
} from './styles';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';
import RecentlyStreamed from '../RecentlyStreamed';

const historyList = [
  { id: 1, title: "Laiba Nadeem", description: "Artist" },
  { id: 2, title: "Laiba Nadeem", description: "Artist" },
  { id: 3, title: "Laiba Nadeem", description: "Artist" },
  { id: 4, title: "Laiba Nadeem", description: "Artist" },
  { id: 5, title: "Laiba Nadeem", description: "Artist" }
];

const History = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView style={{ marginBottom: 90 }}>
        <HeaderRegister>
          <ArrowBack
            onPress={() => { navigation.goBack() }}
            activeOpacity={0.6}
          >
            <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
          </ArrowBack>
          <AreaHeaderTitle>
            <HeaderTitle>History</HeaderTitle>
          </AreaHeaderTitle>
        </HeaderRegister>
        {/* today list */}
        <HistoryListHeading>Today</HistoryListHeading>
        {/* today history list */}
        {historyList.map((historyItem) => (
          <HistoryListContainer key={historyItem.id}>
            <HistoryList key={historyItem.id}>
              <HistoryImage
                source={require("../../assets/ArtistImage.png")}
              />
              <HistoryTextContainer>
                <HistoryTitle
                  numberOfLines={2}
                >
                  {historyItem.title}
                </HistoryTitle>
                <HistoryDescription
                  numberOfLines={2}
                >
                  {historyItem.description}
                </HistoryDescription>
              </HistoryTextContainer>

              <HistoryMenu
                source={require('../../assets/MenuHorizontal.png')}
              />
            </HistoryList>
          </HistoryListContainer>
        ))}

        {/* yesterday list */}
        <HistoryListHeading>Yesterday</HistoryListHeading>
        {/* today history list */}
        {historyList.map((historyItem) => (
          <HistoryListContainer key={historyItem.id}>
            <HistoryList key={historyItem.id}>
              <HistoryImage
                source={require("../../assets/ArtistImage.png")}
              />
              <HistoryTextContainer>
                <HistoryTitle
                  numberOfLines={2}
                >
                  {historyItem.title}
                </HistoryTitle>
                <HistoryDescription
                  numberOfLines={2}
                >
                  {historyItem.description}
                </HistoryDescription>
              </HistoryTextContainer>

              <HistoryMenu
                source={require('../../assets/MenuHorizontal.png')}
              />
            </HistoryList>
          </HistoryListContainer>
        ))}

        <RecentlyStreamed />
      </ScrollView>
      <CustomBottomTabs />
    </Container>
  )
};

export default History;