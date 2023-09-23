import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    HeaderRegister,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderTitle,
    HeaderTitle,
    AreaInput,
    SearchHelp,
    PopularTitle,
    HelpListContainer,
    HelpList,
    HelpImage,
    HelpTextContainer,
    HelpTitle
} from './styles';

const helpList = [
    {
        id: 1,
        label: "How to Sign Up on BEMA"
    },
    {
        id: 2,
        label: "Forgot your Password"
    },
    {
        id: 3,
        label: "Forgot Login Details"
    },
    {
        id: 4,
        label: "How to link social media to BEMA account"
    }
];

const Help = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    return (
        <Container>
            <ScrollView>
                <HeaderRegister>
                    <ArrowBack
                        onPress={() => { navigation.goBack() }}
                        activeOpacity={0.6}
                    >
                        <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                    </ArrowBack>
                    <AreaHeaderTitle>
                        <HeaderTitle>Help</HeaderTitle>
                    </AreaHeaderTitle>
                </HeaderRegister>
                <AreaInput >
                    <SearchHelp
                        placeholder="Search Help"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </AreaInput>
                <PopularTitle>Popular Help Resources</PopularTitle>
                {
                    helpList.map((helpItem) => (
                        <HelpListContainer key={helpItem.id}>
                            <HelpList>
                                <HelpImage
                                    source={require("../../assets/HelpIcon.png")}
                                />
                                <HelpTextContainer>
                                    <HelpTitle
                                        numberOfLines={2}
                                    >
                                        {helpItem.label}
                                    </HelpTitle>
                                </HelpTextContainer>
                            </HelpList>
                        </HelpListContainer>
                    ))
                }
            </ScrollView>
        </Container>
    )
};

export default Help;
