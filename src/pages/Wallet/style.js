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

export const ParentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonArea = styled.TouchableOpacity`
background-color: #FFD345;
width: 50%;
height: 51px;
border-radius: 12px;
justify-content: center;
align-items: center;
`;

export const ButtonText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #151515;
text-align: center;
`;

export const WalletText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: white;
text-align: center;
margin-top: 15px
`;

export const WalletMainContainer = styled.View`
flex-direction: row;
justify-content: center;
margin-top: 30px;
`;

export const SendContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`;

export const DollarContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 30px
`;

export const SendWalletText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: white;
margin-top: 10px;
margin-bottom: 10px;
`;

export const PointsContainer = styled.View`
flex-direction: row;
margin-left: 20px;
margin-top: 10px;
`;

export const PointsText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: white;
margin-left: 10px;
margin-top: 20px;
`;

export const RedeemPointsText = styled.Text`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: white;
padding: 20px;
border: 2px solid #FFD345;
margin-left: 50px;
border-radius: 12px;
`;

export const TransactionHeading = styled.Text`
color: #FFD345;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 20px;
padding: 10px 30px;
margin-top: 20px;
`;

export const TransactionContainer = styled.Pressable`
border-radius: 6px;
margin-top: 20px;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding : 0px 20px;
`;

export const Transaction = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;
`;

export const TransactionImage = styled.Image`
width: 30px;
height: 30px;
`;

export const TransactionTextContainer = styled.View`
display: flex;
flex-direction: column;
`;

export const TransactionTitle = styled.Text`
font-size: 16px;
width: 220px;
color: #D0D1D3;
font-weight: 500;
font-family: SF Pro Text;
`;

export const TransactionDescription = styled.Text`
font-size: 13px;
width: 220px;
color: #B0B2B5;
font-weight: 400;
margin-top: 10px;
font-family: 'SF Pro Text';
`;