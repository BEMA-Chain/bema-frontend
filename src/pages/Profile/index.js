import { useNavigation } from '@react-navigation/native';
import {
    Container,
    HeaderRegister,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderTitle,
    HeaderTitle,
    ProfileListContainer,
    ProfileList,
    ProfileImage,
    ProfileTextContainer,
    ProfileDescription,
    ProfileTitle,
    ProfileItemsImage,
    ProfileActionItems,
    ProfileActionItemText
} from "./styles";
import { TouchableOpacity } from 'react-native';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';

const Profile = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <HeaderRegister>
                <ArrowBack
                    onPress={() => { navigation.goBack() }}
                    activeOpacity={0.6}
                >
                    <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                </ArrowBack>
                <AreaHeaderTitle>
                    <HeaderTitle>Profile</HeaderTitle>
                </AreaHeaderTitle>
            </HeaderRegister>
            {/* Profile name container  */}
            <ProfileListContainer>
                <ProfileList>
                    <ProfileImage
                        source={require("../../assets/ProfileIcon.png")}
                    />
                    <ProfileTextContainer>
                        <ProfileTitle
                            numberOfLines={2}
                        >
                            Jane Foster
                        </ProfileTitle>
                        <ProfileDescription
                            numberOfLines={2}
                        >
                            Janefoster@gmail.com
                        </ProfileDescription>
                    </ProfileTextContainer>
                </ProfileList>
            </ProfileListContainer>
            {/* profile list */}
            <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                <ProfileActionItems>
                    <ProfileItemsImage
                        source={require(`../../assets/CreditCard.png`)}
                    />
                    <ProfileActionItemText>Wallet</ProfileActionItemText>
                </ProfileActionItems>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <ProfileActionItems>
                    <ProfileItemsImage
                        source={require(`../../assets/Clock.png`)}
                    />
                    <ProfileActionItemText>History</ProfileActionItemText>
                </ProfileActionItems>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                <ProfileActionItems>
                    <ProfileItemsImage
                        source={require(`../../assets/HelpCircle.png`)}
                    />
                    <ProfileActionItemText>Help</ProfileActionItemText>
                </ProfileActionItems>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <ProfileActionItems>
                    <ProfileItemsImage
                        source={require(`../../assets/Settings.png`)}
                    />
                    <ProfileActionItemText>Settings</ProfileActionItemText>
                </ProfileActionItems>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <ProfileActionItems>
                    <ProfileItemsImage
                        source={require(`../../assets/Logout.png`)}
                    />
                    <ProfileActionItemText>Logout</ProfileActionItemText>
                </ProfileActionItems>
            </TouchableOpacity>
            <CustomBottomTabs />
        </Container>
    )
};

export default Profile;