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

export const AreaInput = styled.View`
flex-direction: row;
width: 90%;
background-color: #F5F5F5;
border-radius: 12px;
height: 60px;
align-items: center;
margin-bottom: 15px;
margin-left: 20px;
margin-right: 20px;
color: #FFD345
`;

export const SearchHelp = styled.TextInput`
width: 100%;
height: 60px;
padding: 16px;
font-size: 18px;
color: #2F2F2F;
`;

export const PopularTitle = styled.Text`
color: #FFD345;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 20px;
margin: 20px;
`;

export const HelpListContainer = styled.Pressable`
border-radius: 6px;
margin-top: 30px;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-bottom: 10px;
`;

export const HelpList = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
`;

export const HelpImage = styled.Image`
width: 30px;
height: 30px;
margin-left: 20px;
`;

export const HelpTextContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`;

export const HelpTitle = styled.Text`
font-size: 18px;
width: 300px;
color: #D0D1D3;
font-weight: 500;
font-family: SF Pro Text;
`;