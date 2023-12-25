import { useState } from "react";
import { Container, SearchScroll, PlaylistContainer, PlaylistText, AreaInput, SearchInput } from "./styles";
import SharedCard from "../../sharedComponents/SharedCards";
import CustomBottomTabs from "../../sharedComponents/CustomBottomTabs";
import AutocompleteSearch from "../../sharedComponents/Autocomplete";

const data = [
    { id: '1', title: 'Item 1', description: 'Description Item 1', image: require('../../assets/MaskGroup.png') },
    { id: '2', title: 'Item 2', description: 'Description Item 2', image: require('../../assets/MusicImage.png') },
    { id: '3', title: 'Item 3', description: 'Description Item 3', image: require('../../assets/MaskGroup.png') },
    { id: '4', title: 'Item 4', description: 'Description Item 4', image: require('../../assets/MusicImage.png') },
    { id: '5', title: 'Item 5', description: 'Description Item 5', image: require('../../assets/MaskGroup.png') },
    // Add more items as needed
];

const artistsData = [
    { id: '1', title: 'Item 1', description: 'Description Item 1', image: require('../../assets/Artists.png') },
    { id: '2', title: 'Item 2', description: 'Description Item 2', image: require('../../assets/Artists.png') },
    { id: '3', title: 'Item 3', description: 'Description Item 3', image: require('../../assets/Artists.png') },
    { id: '4', title: 'Item 4', description: 'Description Item 4', image: require('../../assets/Artists.png') },
    { id: '5', title: 'Item 5', description: 'Description Item 5', image: require('../../assets/Artists.png') },
    // Add more items as needed
];

const Search = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <SearchScroll>
                <AreaInput>
                    <SearchInput
                        placeholder="Search"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </AreaInput>
                {/* playlist heading */}
                <PlaylistContainer>
                    <PlaylistText>Artist</PlaylistText>
                </PlaylistContainer>

                {/* playlist card */}
                <SharedCard data={artistsData} />

                {/* songs section */}
                {/* playlist heading */}
                <PlaylistContainer>
                    <PlaylistText>Songs</PlaylistText>
                </PlaylistContainer>

                {/* playlist card */}
                <SharedCard data={data} />

                {/* album section */}
                {/* playlist heading */}
                <PlaylistContainer>
                    <PlaylistText>Prodcasts</PlaylistText>
                </PlaylistContainer>

                {/* playlist card */}
                <SharedCard data={data} />
            </SearchScroll>
            <CustomBottomTabs />
        </Container>
    )
}

export default Search;