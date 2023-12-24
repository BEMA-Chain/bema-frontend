import { useNavigation } from '@react-navigation/native';
import { AlbumsContainer, AlbumsDescription, AlbumsImage, AlbumsTitle, AreaHeaderTitle, ArrowBack, ArrowBackIcon, Container, HeaderAlbums, HeaderTitle } from './styles';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';

const albumsList = [
    { id: 1, title: 'Song Title', description: "Artist" },
    { id: 2, title: 'Song Title 1', description: "Artist" },
    { id: 3, title: 'Song Title 2', description: "Artist" },
    { id: 4, title: 'Song Title 3', description: "Artist" },
    { id: 5, title: 'Song Title 4', description: "Artist" },
    { id: 6, title: 'Song Title 5', description: "Artist" },
];

const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const Albums = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <HeaderAlbums>
                <ArrowBack
                    onPress={() => { navigation.goBack() }}
                    activeOpacity={0.6}
                >
                    <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                </ArrowBack>
                <AreaHeaderTitle>
                    <HeaderTitle>Albums</HeaderTitle>
                </AreaHeaderTitle>
            </HeaderAlbums>

             {/* albums list */}
             <ScrollView style={{ marginBottom: 90 }}>
                <AlbumsContainer>
                    {albumsList.map((playedItem, i) => {
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
                                <TouchableOpacity onPress={() => navigation.navigate('AlbumDetails', { item: playedItem })}>
                                    <AlbumsImage
                                        source={require('../../assets/MusicImage.png')}
                                    />
                                    <AlbumsTitle>{playedItem.title}</AlbumsTitle>
                                    <AlbumsDescription>{playedItem.description}</AlbumsDescription>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </AlbumsContainer>
            </ScrollView>
            <CustomBottomTabs />
        </Container>
    )
};

export default Albums;