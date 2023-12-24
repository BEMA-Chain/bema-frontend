import { AreaHeaderTitle, ArrowBack, ArrowBackIcon, Container, FeedbackButton, FeedbackButtonContainer, FeedbackText, HeaderRegister, HeaderTitle, HelpDescription, HelpTitle, HelpfulContainer, HelpfulText } from './styles';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';

const HelpDetails = ({ route }) => {
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
                        <HeaderTitle>Help</HeaderTitle>
                    </AreaHeaderTitle>
                </HeaderRegister>
                {/* help details */}
                <HelpTitle>{item.label}</HelpTitle>
                <HelpDescription>{item.description}</HelpDescription>
                {/* was this helpful */}
                <HelpfulContainer>
                    <HelpfulText>Was this helpful?</HelpfulText>
                </HelpfulContainer>
                {/* feedback button container */}
                <FeedbackButtonContainer>
                    <FeedbackButton>
                         <FeedbackText>Yes</FeedbackText>
                    </FeedbackButton>
                    <FeedbackButton>
                         <FeedbackText>No</FeedbackText>
                    </FeedbackButton>
                </FeedbackButtonContainer>
            </ScrollView>
            <CustomBottomTabs />
        </Container>
    )
};

export default HelpDetails;