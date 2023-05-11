import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
`;

export const AreaText = styled.View`
flex: 2;
background-color: rgba(13, 13, 13, 0.96);
`;

export const Image = styled.Image`
height: 484px;
width: 100%;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
`;

export const Title = styled.Text`
color: #FFF6DA;
font-family: 'SF Pro Text';
font-style: normal;
font-size: 20px;
text-align: center;
margin-top: 40px;
`;

export const DescriptionText = styled.Text`
color: #D0D1D3;
text-align: center;
font-family: 'SF Pro Text';
font-style: normal;
font-size: 13px;
padding-left: 20px;
padding-right: 20px;
margin-top: 20px;
`;

export const ButtonArea = styled.TouchableOpacity`
background-color: #FFD345;
width: 90%;
height: 51px;
border-radius: 12px;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-left: 20px;
margin-right: 20px;
`;

export const ButtonText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #151515;
`;