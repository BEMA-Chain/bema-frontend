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
width: 40%;
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

export const AboutusList = styled.View`
display: flex;
flex-direction: column;
padding: 15px 25px;
`;

export const AboutUsListTitle = styled.Text`
color: #D0D1D3;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
`;

export const AboutUsListDescription = styled.Text`
color: #B0B2B5;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 14px;
`;