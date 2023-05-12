import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0d0d0d;
`;

export const Title = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 22px;
color: #FFD345;
margin-top: 5px;
margin-bottom: 20px;
left: 20px;
right: 20px;
`;

export const Input = styled.TextInput`
background: #F5F5F5;
border-radius: 12px;
padding: 16px;
margin-bottom: 5px;
margin-left: 20px;
margin-right: 20px;
font-size: 18px;
color: #2F2F2F;
`;

export const Description = styled.Text`
color: #D0D1D3;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
margin-left: 20px;
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
position: absolute;
top: 40%;
`;

export const ButtonText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #151515;
`;
