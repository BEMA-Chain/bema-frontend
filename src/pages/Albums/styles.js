import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
`;

export const HeaderAlbums = styled.SafeAreaView`
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

export const AlbumsContainer = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

export const AlbumsImage = styled.Image`
width: 150px;
height: 150px;
`;

export const AlbumsTitle = styled.Text`
font-size: 16px;
font-weight: 500;
color: #D0D1D3;
margin-top: 20px;
font-family: 'SF Pro Text';
`;

export const AlbumsDescription = styled.Text`
font-size: 14px;
font-weight: 400;
color: #B0B2B5;
font-family: 'SF Pro Text';
margin-top: 5px;
margin-bottom: 10px
`;