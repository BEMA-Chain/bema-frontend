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

export const PushNotificationContainer = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
justify-content: space-between;
padding: 25px;
`;

export const NotificationTextContainer = styled.View`
display: flex;
flex-direction: column;
`;

export const NotificationTitle = styled.Text`
font-family: 'SF Pro Text';
font-weight: 500;
font-size: 20px;
color: #D0D1D3;
line-height: 19.2px
`;

export const NotificationDescription = styled.Text`
font-family: 'SF Pro Text';
font-weight: 400;
font-size: 16px;
color: #888C90;
margin-top: 10px;
`;

export const SettingsLabelHeading = styled.Text`
font-family: 'SF Pro Text';
font-weight: 500;
font-size: 20px;
color: #D0D1D3;
line-height: 19.2px;
padding: 25px;
`;

export const LanguageContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
