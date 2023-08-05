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

export const ProfileListContainer = styled.Pressable`
border-radius: 6px;
margin-top: 20px;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-bottom: 30px;
`;

export const ProfileList = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
`;

export const ProfileImage = styled.Image`
width: 70px;
height: 70px;
margin-left: 20px;
`;

export const ProfileTextContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ProfileTitle = styled.Text`
font-size: 20px;
width: 220px;
color: #D0D1D3;
font-weight: 500;
font-family: SF Pro Text;
`;

export const ProfileDescription = styled.Text`
font-size: 14px;
width: 220px;
color: #B0B2B5;
font-weight: 400;
margin-top: 10px;
font-family: 'SF Pro Text';
`;

export const ProfileItemsImage = styled.Image`
width: 24px;
height: 24px;
`;

export const ProfileActionItems = styled.View`
display: flex;
flex-direction: row;
gap: 30px;
padding: 20px;
margin-left: 15px;
align-items: center;
`;

export const ProfileActionItemText = styled.Text`
font-family : "SF Pro Text";
font-weight: 500;
font-size : 18px;
color: #D0D1D3;
line-height: 19.2px;
`;