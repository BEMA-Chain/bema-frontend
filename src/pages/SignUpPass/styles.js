import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
`;

export const HeaderRegister = styled.View`
width: 100%;
background-color: #0d0d0d;
flex-direction: row;
align-items: center;
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

export const AreaHeaderDoc = styled.View`
width: 80%;
height: 70px;
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
margin-bottom: 20px;
left: 20px;
right: 20px;
`;

export const AreaInput = styled.View`
flex-direction: row;
width: 90%;
background-color: #F5F5F5;
border-radius: 12px;
height: 60px;
align-items: center;
margin-bottom: 5px;
margin-left: 20px;
margin-right: 20px;
`;

export const Input = styled.TextInput`
width: 85%;
height: 60px;
padding: 16px;
font-size: 18px;
color: #2F2F2F;
`;

export const AreaIcon = styled.TouchableOpacity`
width: 15%;
height: 60px;
align-items: center;
justify-content: center;
`;

export const Description = styled.Text`
color: #D0D1D3;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
margin-left: 20px;
margin-bottom: 20px;
`;

export const ButtonArea = styled.TouchableOpacity`
background-color: #FFD345;
width: 90%;
height: 51px;
border-radius: 12px;
justify-content: center;
align-items: center;
margin-top: 30px;
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

export const TextError = styled.Text`
color: #ff375b;
margin-bottom: 8px;
margin-left: 20px;
margin-right: 20px;
`;