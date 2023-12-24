import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
`;

export const SearchScroll = styled.ScrollView`
margin-top : 40px;
padding: 10px;
margin-bottom: 90
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

export const AreaInput = styled.View`
flex-direction: row;
width: 100%;
background-color: #F5F5F5;
border-radius: 12px;
height: 60px;
align-items: center;
margin-bottom: 15px;
color: #FFD345
`;

export const SearchInput = styled.TextInput`
width: 100%;
height: 60px;
padding: 16px;
font-size: 18px;
color: #2F2F2F;
`;