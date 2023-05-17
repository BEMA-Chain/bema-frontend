import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0d0d0d;
`;

export const HeaderRegister = styled.View`
width: 100%;
background-color: #0d0d0d;
flex-direction: row;
align-items: center;
height: 55px;
margin-top: 25px;
margin-left: 20px;
`;

export const ArrowBack = styled.TouchableOpacity`
width: 5%;
height: 55px;
justify-content: center;
align-items: center;
`;

export const ArrowBackIcon = styled.Image`
width: 8px;
height: 14px;
`;

export const AreaHeaderDoc = styled.View`
width: 85%;
height: 55px;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const HeaderDoc = styled.Image`
width: 8px;
height: 8px;
margin-left: 14px;
`;

export const Title = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 22px;
color: #FFD345;
margin-top: 10px;
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
margin-top: 43%;
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