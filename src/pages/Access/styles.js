import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
align-items: center;
justify-content: center;
`;

export const ImagePlay = styled.Image`
position: absolute;
width: 124px;
height: 124px;
left: 16px;
top: 98px;
`;

export const ImageMelody = styled.Image`
position: absolute;
width: 140px;
height: 140px;
left: 223px;
top: 609px;
`;

export const Title = styled.Text`
color: #FFF6DA;
font-family: 'SF Pro Text';
font-style: normal;
font-size: 19px;
text-align: center;
margin-top: 40px;
`;

export const DescriptionText = styled.Text`
color: #D0D1D3;
text-align: center;
font-family: 'SF Pro Text';
font-style: normal;
font-size: 13px;
padding-left: 40px;
padding-right: 40px;
margin-top: 20px;
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
font-size: 16px;
color: #151515;
`;

export const LinkLogin =styled.TouchableOpacity`
margin-top: 10px;
margin-bottom: 10px;
`;

export const LinkLoginText = styled.Text`
color: #FFD345;
`;