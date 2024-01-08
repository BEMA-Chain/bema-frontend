import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
`;

export const AreaText = styled.View`
flex: 2;
background-color: #0d0d0d;
`;

export const Image = styled.Image`
height: 68%;
width: 100%;
`;

export const Title = styled.Text`
color: #FFF6DA;
font-family: 'SF Pro Text';
font-style: normal;
font-size: 26px;
text-align: center;
margin-top: 13px;
`;

export const DescriptionText = styled.Text`
color: #D0D1D3;
text-align: center;
font-family: 'SF Pro Text';
font-style: normal;
font-size: 17px;
padding-left: 30px;
padding-right: 30px;
margin-top: 20px;
`;

export const ButtonArea = styled.TouchableOpacity`
background-color: #FFD345;
width: 90%;
height: 51px;
border-radius: 12px;
justify-content: center;
align-items: center;
margin-top: 25px;
margin-left: 20px;
margin-right: 20px;
`;

export const ButtonText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #151515;
`;