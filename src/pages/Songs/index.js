import { useNavigation } from '@react-navigation/native';
import { AreaHeaderTitle, ArrowBack, ArrowBackIcon, Container, HeaderSongs, HeaderTitle, SongsContainer, SongsDescription, SongsImage, SongsTitle } from './styles';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';

const songsList = [
    { id: 1, title: 'Song Title', description: "Artist" },
    { id: 2, title: 'Song Title 1', description: "Artist" },
    { id: 3, title: 'Song Title 2', description: "Artist" },
    { id: 4, title: 'Song Title 3', description: "Artist" },
    { id: 5, title: 'Song Title 4', description: "Artist" },
    { id: 6, title: 'Song Title 5', description: "Artist" },
];

const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const Songs = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <HeaderSongs>
                <ArrowBack
                    onPress={() => { navigation.goBack() }}
                    activeOpacity={0.6}
                >
                    <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                </ArrowBack>
                <AreaHeaderTitle>
                    <HeaderTitle>Songs</HeaderTitle>
                </AreaHeaderTitle>
            </HeaderSongs>

            {/* songs list */}
            <ScrollView style={{ marginBottom: 90 }}>
                <SongsContainer>
                    {songsList.map((playedItem, i) => {
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
                                    <SongsImage
                                        source={require('../../assets/MusicImage.png')}
                                    />
                                    <SongsTitle>{playedItem.title}</SongsTitle>
                                    <SongsDescription>{playedItem.description}</SongsDescription>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </SongsContainer>
            </ScrollView>
            <CustomBottomTabs />
        </Container>
    )
};

export default Songs;