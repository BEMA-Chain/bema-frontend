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
margin-left: 30px;
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
width: 30%;
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

export const AlbumListContainer = styled.Pressable`
border-radius: 6px;
margin-top: 20px;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding : 0px 20px;
`;

export const AlbumList = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
`;

export const AlbumImage = styled.Image`
width: 70px;
height: 70px;
`;

export const AlbumTextContainer = styled.View`
display: flex;
flex-direction: column;
`;

export const AlbumTitle = styled.Text`
font-size: 16px;
width: 220px;
color: #D0D1D3;
font-weight: 500;
font-family: SF Pro Text;
`;

export const AlbumDescription = styled.Text`
font-size: 13px;
width: 220px;
color: #B0B2B5;
font-weight: 400;
margin-top: 10px;
font-family: 'SF Pro Text';
`;

export const AlbumMenu = styled.Image`
width: 30px;
height: 30px;
`;