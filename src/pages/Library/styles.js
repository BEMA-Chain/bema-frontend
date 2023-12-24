import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
`;

export const LibraryScroll = styled.ScrollView`
margin-top : 40px;
padding: 10px;
margin-bottom: 90
`;

export const LibraryText = styled.Text`
margin-left: 10px;
font-size: 22px;
fontWeight: 500;
color: #FFD345;
font-family: SF Pro Text;
`;


export const PlaylistContainer = styled.View`
flex-direction : row;
align-items: center;
justify-content: space-between;
margin-top: 20px
`;

export const PlaylistText = styled.Text`
margin-left: 10px;
font-size: 20px;
fontWeight: 500;
color: #FFD345;
font-family: SF Pro Text;
`;

export const SeeMoreText = styled.Text`
margin-left: 10px;
font-size: 14px;
fontWeight: 400;
color: #D0D1D3;
font-family: SF Pro Text;
`;