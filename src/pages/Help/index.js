import { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
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
        label: "How to Sign Up on BEMA",
        description : "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
    },
    {
        id: 2,
        label: "Forgot your Password",
        description : "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
    },
    {
        id: 3,
        label: "Forgot Login Details",
        description : "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
    },
    {
        id: 4,
        label: "How to link social media to BEMA account",
        description : "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
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
                                <TouchableOpacity onPress={() => navigation.navigate('HelpDetails', { item: helpItem })}>
                                    <HelpTextContainer>
                                        <HelpTitle
                                            numberOfLines={2}
                                        >
                                            {helpItem.label}
                                        </HelpTitle>
                                    </HelpTextContainer>
                                </TouchableOpacity>
                            </HelpList>
                        </HelpListContainer>
                    ))
                }
            </ScrollView>
        </Container >
    )
};

export default Help;
