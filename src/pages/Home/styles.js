import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #0D0D0D;
`;

export const HomeScroll = styled.ScrollView`
margin-top : 40px;
padding: 10px;
margin-bottom: 90
`;

export const ProfileContainer = styled.View`
flex-direction : row;
align-items: center;
justify-content: space-between;
`;

export const ProfileText = styled.Text`
margin-left: 10px;
font-size: 22px;
fontWeight: 500;
color: #FFD345;
font-family: SF Pro Text;
`;

export const ProfileImage = styled.Image`
width: 40px;
height: 40px;
`;

export const RecommendationHeader = styled.Text`
margin-left: 10px;
font-size: 20px;
font-weight: 500;
color: #FFD345;
margin-top: 30px;
font-family: SF Pro Text;
`;

export const RecommendationListContainer = styled.Pressable`
border-radius: 6px;
margin-top: 20px;
justify-content: space-between;
flex-direction: row;
align-items: center;
`;

export const RecommendationList = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
`;

export const RecommendationImage = styled.Image`
width: 70px;
height: 70px;
`;

export const RecommendationTextContainer = styled.View`
display: flex;
flex-direction: column;
`;

export const RecommendationTitle = styled.Text`
font-size: 16px;
width: 220px;
color: #D0D1D3;
font-weight: 500;
font-family: SF Pro Text;
`;

export const RecommendationDescription = styled.Text`
font-size: 13px;
width: 220px;
color: #B0B2B5;
font-weight: 400;
margin-top: 10px;
font-family: 'SF Pro Text';
`;

export const RecommendationMenu = styled.Image`
width: 30px;
height: 30px;
`;

export const RecentlyPlayedHeader = styled.Text`
margin-left: 10px;
font-size: 20px;
font-weight: 500;
color: #FFD345;
margin-top: 30px;
font-family: 'SF Pro Text';
`;

export const RecentlyPlayedContainer = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

export const RecentlyPlayedImage = styled.Image`
width: 130px;
height: 130px;
`;

export const RecentlyPlayedTitle = styled.Text`
font-size: 16px;
font-weight: 500;
color: #D0D1D3;
margin-top: 20px;
font-family: 'SF Pro Text';
text-align: center;
`;

export const RecentlyPlayedDescription = styled.Text`
font-size: 14px;
text-align: center;
font-weight: 400;
color: #B0B2B5;
font-family: 'SF Pro Text';
margin-top: 10px;
`;