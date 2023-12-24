import { Container, LibraryScroll, LibraryText, PlaylistContainer, PlaylistText, SeeMoreText } from "./styles";
import SharedCard from "../../sharedComponents/SharedCards";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomBottomTabs from "../../sharedComponents/CustomBottomTabs";

const data = [
    { id: '1', title: 'Item 1', description: 'Description Item 1', image: require('../../assets/MaskGroup.png') },
    { id: '2', title: 'Item 2', description: 'Description Item 2', image: require('../../assets/MusicImage.png') },
    { id: '3', title: 'Item 3', description: 'Description Item 3', image: require('../../assets/MaskGroup.png') },
    { id: '4', title: 'Item 4', description: 'Description Item 4', image: require('../../assets/MusicImage.png') },
    { id: '5', title: 'Item 5', description: 'Description Item 5', image: require('../../assets/MaskGroup.png') },
    // Add more items as needed
];

const Library = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <LibraryScroll>
                <LibraryText>Your Library</LibraryText>
                {/* playlist heading */}
                <PlaylistContainer>
                    <PlaylistText>Playlists</PlaylistText>
                    <TouchableOpacity onPress={() => navigation.navigate('PlayLists')}>
                        <SeeMoreText>See more</SeeMoreText>
                    </TouchableOpacity>
                </PlaylistContainer>

                {/* playlist card */}
                <SharedCard data={data} />

                {/* songs section */}
                {/* playlist heading */}
                <PlaylistContainer>
                    <PlaylistText>Songs</PlaylistText>
                    <TouchableOpacity onPress={() => navigation.navigate('Songs')}>
                        <SeeMoreText>See more</SeeMoreText>
                    </TouchableOpacity>
                </PlaylistContainer>

                {/* playlist card */}
                <SharedCard data={data} />

                {/* album section */}
                {/* playlist heading */}
                <PlaylistContainer>
                    <PlaylistText>Albums</PlaylistText>
                    <TouchableOpacity onPress={() => navigation.navigate('Albums')}>
                        <SeeMoreText>See more</SeeMoreText>
                    </TouchableOpacity>
                </PlaylistContainer>

                {/* playlist card */}
                <SharedCard data={data} />
            </LibraryScroll>
            <CustomBottomTabs />
        </Container>
    )
}

export default Library;