import { AreaHeaderTitle, HeaderTitle, RecentlyStreamedContainer, RecentlyStreamedDescription, RecentlyStreamedImage, RecentlyStreamedTitle } from './styles';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';

const recentlyStreamedList = [
    { id: 1, title: 'Song Title', description: "Artist" },
    { id: 2, title: 'Song Title 1', description: "Artist" },
    { id: 3, title: 'Song Title 2', description: "Artist" },
    { id: 4, title: 'Song Title 3', description: "Artist" },
    { id: 5, title: 'Song Title 4', description: "Artist" },
    { id: 6, title: 'Song Title 5', description: "Artist" },
];

const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const RecentlyStreamed = () => {
    return (
        <>
            <AreaHeaderTitle>
                <HeaderTitle>Recently Streamed</HeaderTitle>
            </AreaHeaderTitle>

            {/* RecentlyStreamed list */}
            <RecentlyStreamedContainer>
                {recentlyStreamedList.map((playedItem, i) => {
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
                                <RecentlyStreamedImage
                                    source={require('../../assets/MusicImage.png')}
                                />
                                <RecentlyStreamedTitle>{playedItem.title}</RecentlyStreamedTitle>
                                <RecentlyStreamedDescription>{playedItem.description}</RecentlyStreamedDescription>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </RecentlyStreamedContainer>
        </>
    )
};

export default RecentlyStreamed;