import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
`;

export const HeaderRegister = styled.SafeAreaView`
width: 100%;
background-color: #0d0d0d;
flex-direction: row;
height: 70px;
margin-top: 25px;
margin-left: 20px;
`;

export const ArrowBack = styled.TouchableOpacity`
width: 5%;
height: 70px;
justify-content: center;
align-items: center;
`;

export const ArrowBackIcon = styled.Image`
width: 8px;
height: 14px;
`;

export const AreaHeaderTitle = styled.View`
width: 25%;
height: 70px;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const HeaderTitle = styled.Text`
color: #FFD345;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
`;

export const HelpTitle = styled.Text`
color: #FFD345;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 20px;
margin-left: 20px;
`;

export const HelpDescription = styled.Text`
color: #D0D1D3;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin: 20px;
line-height: 20px;
`;

export const HelpfulContainer = styled.View`
justify-content: center;
align-items: center
`;

export const HelpfulText = styled.Text`
color: #FFD345;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
margin: 20px;
line-height: 20px;
`;

export const FeedbackButtonContainer = styled.View`
flex-direction: row;
justify-content: center;
`;

export const FeedbackButton = styled.TouchableOpacity`
padding-vertical: 2px;
padding-horizontal: 6px;
margin-horizontal: 6px;
border: 2px solid #FFD345;
padding: 10px;
border-radius: 12px;
`;

export const FeedbackText = styled.Text`
color: #FFD345;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
margin: 10px 20px;
line-height: 20px;
`;