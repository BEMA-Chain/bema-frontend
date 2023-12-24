import { AlbumDescription, AlbumImage, AlbumList, AlbumListContainer, AlbumMenu, AlbumTextContainer, AlbumTitle, AreaHeaderTitle, ArrowBack, ArrowBackIcon, Container, HeaderRegister, HeaderTitle } from './styles';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';

const albumsList = [
    { id: 1, title: "Laiba Nadeem", description: "Artist" },
    { id: 2, title: "Laiba Nadeem", description: "Artist" },
    { id: 3, title: "Laiba Nadeem", description: "Artist" },
    { id: 4, title: "Laiba Nadeem", description: "Artist" },
    { id: 5, title: "Laiba Nadeem", description: "Artist" }
]

const AlbumDetails = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
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
                        <HeaderTitle>{item.title}</HeaderTitle>
                    </AreaHeaderTitle>
                </HeaderRegister>
                {/* list */}
                {albumsList.map((albumItem) => (
                    <AlbumListContainer key={albumItem.id}>
                        <AlbumList key={albumItem.id}>
                            <AlbumImage
                                source={require("../../assets/ArtistImage.png")}
                            />
                            <AlbumTextContainer>
                                <AlbumTitle
                                    numberOfLines={2}
                                >
                                    {albumItem.title}
                                </AlbumTitle>
                                <AlbumDescription
                                    numberOfLines={2}
                                >
                                    {albumItem.description}
                                </AlbumDescription>
                            </AlbumTextContainer>

                            <AlbumMenu
                                source={require('../../assets/MenuHorizontal.png')}
                            />
                        </AlbumList>
                    </AlbumListContainer>
                ))}
            </ScrollView>
            <CustomBottomTabs />
        </Container>
    )
};

export default AlbumDetails;